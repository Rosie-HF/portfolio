const base = process.env.BASE_URL
  ? `/${process.env.BASE_URL}`.replace(/\/{2,}/g, '/').replace(/\/$/, '')
  : '';

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: 'pnpm preview --host 127.0.0.1 --port 4321',
      url: [
        `http://127.0.0.1:4321${base}/zh-cn/`,
        `http://127.0.0.1:4321${base}/zh-cn/resume/`,
        `http://127.0.0.1:4321${base}/zh-cn/work/`,
        `http://127.0.0.1:4321${base}/zh-cn/faq/`,
      ].map((url) => url.replace(/([^:])\/\//g, '$1/')),
    },
    upload: {
      target: 'temporary-public-storage',
      // target: 'lhci',
      // serverBaseUrl: process.env.PUBLIC_LHCI_BASE_URL,
      // token: process.env.LHCI_TOKEN,
    },
  },
};
