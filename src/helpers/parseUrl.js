export const parseURL = (urlText) => {
  try {
    const url = new URL(urlText);

    return {
      url: url.href.replace(/^https?:\/\//, ""),
      domain: url.hostname,
      path: url.pathname,
      protocol: url.protocol,
      favicon: `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=512`,
      keywords: [], // You can add logic to extract keywords if needed
    };
  } catch (error) {
    // Handle URL parsing error, e.g., invalid URL
    alert("Invalid URL:", urlText);
    return null;
  }
};
