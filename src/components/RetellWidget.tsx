import { useEffect } from 'react';

// NOTE: The shadow-DOM structure and aria-label are undocumented internals 
// of Retell's widget (no official public API as of now). Verified by 
// inspection and may require updates if Retell changes their internal markup.

let retellButtonCache: HTMLElement | null = null;

export const openRetellWidget = () => {
  if (retellButtonCache) {
    retellButtonCache.click();
    return;
  }

  const findAndClick = (retriesLeft: number) => {
    const rootContainer = document.getElementById("retell-widget-root");
    const shadowHost = rootContainer?.firstElementChild;

    if (shadowHost && shadowHost.shadowRoot) {
      // First try to find by known labels, otherwise just get the first button
      const button = shadowHost.shadowRoot.querySelector('button[aria-label="Open Assistant"], button[aria-label="Close assistant"], button');
      if (button) {
        retellButtonCache = button as HTMLElement;
        retellButtonCache.click();
        return;
      }
    }

    if (retriesLeft > 0) {
      setTimeout(() => findAndClick(retriesLeft - 1), 100);
    } else {
      console.warn("Retell widget button not found. The internal markup might have changed.");
      if (shadowHost && shadowHost.shadowRoot) {
        console.warn("Shadow DOM contents:", shadowHost.shadowRoot.innerHTML);
      }
    }
  };

  findAndClick(50); // 50 * 100ms = 5 seconds
};

export const RetellWidget = () => {
  useEffect(() => {
    let brandingInterval: number | undefined;

    if (!document.getElementById("retell-widget")) {
      const script = document.createElement("script");
      script.id = "retell-widget";
      script.src = "https://dashboard.retellai.com/retell-widget-v2.js";
      script.type = "module";
      script.setAttribute("data-voice-public-key", "public_key_dd0f5bf2461eed1bf27d3");
      script.setAttribute("data-voice-agent-id", "agent_ef7aa1360c2423cea198b36f16");
      document.body.appendChild(script);

      // Inject a <style> element to hide the default launcher button
      const hideDefaultButton = (retriesLeft: number) => {
        const rootContainer = document.getElementById("retell-widget-root");
        const shadowHost = rootContainer?.firstElementChild;

        if (shadowHost && shadowHost.shadowRoot) {
          if (!shadowHost.shadowRoot.getElementById("retell-custom-style")) {
            const style = document.createElement("style");
            style.id = "retell-custom-style";
            style.textContent = `
              button[aria-label="Open Assistant"] {
                display: none !important;
              }
            `;
            shadowHost.shadowRoot.appendChild(style);
          }
          return;
        }

        if (retriesLeft > 0) {
          setTimeout(() => hideDefaultButton(retriesLeft - 1), 100);
        }
      };
      hideDefaultButton(50);

      brandingInterval = window.setInterval(() => {
        const rootContainer = document.getElementById("retell-widget-root");
        const shadowHost = rootContainer?.firstElementChild;
        if (shadowHost && shadowHost.shadowRoot) {
          const links = shadowHost.shadowRoot.querySelectorAll('a');
          links.forEach(link => {
            if (link.textContent?.includes('Retell') || link.href.includes('retell')) {
              link.style.display = 'none';
            }
          });

          const allEls = shadowHost.shadowRoot.querySelectorAll('div, span, p, h1, h2, h3, h4, h5, h6');
          allEls.forEach(el => {
            if (el.children.length === 0 && el.textContent) {
              const text = el.textContent.trim();
              if (text === 'Retell' || text === 'Your RetellAI assistant' || text.includes('Powered by Retell')) {
                (el as HTMLElement).style.display = 'none';
              }
            }
          });
        }
      }, 500);
    }

    return () => {
      if (brandingInterval) {
        window.clearInterval(brandingInterval);
      }
      const script = document.getElementById("retell-widget");
      if (script) {
        script.remove();
      }
      
      const root = document.getElementById("retell-widget-root");
      if (root) {
        root.remove();
      }
    };
  }, []);

  return null;
};
