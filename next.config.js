/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/api/support": ["./private/support/bank-qr.png"],
  },
  // Short links are temporary (307) on purpose: browsers cache permanent
  // redirects indefinitely, so a moved target would never reach old visitors.
  async redirects() {
    return [
      {
        source: "/install",
        destination:
          "https://raw.githubusercontent.com/arlbibek/dotfiles/refs/heads/master/scripts/install.sh",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/arlbibek",
        permanent: false,
      },
      {
        source: "/arlresume",
        destination:
          "https://drive.google.com/drive/folders/1xc-jyi9qWAuSwfDL8rgxDn4YrwcMi9il",
        permanent: false,
      },
      {
        source: "/resume",
        destination: "https://rxresu.me/bibeka/resume",
        permanent: false,
      },
      {
        source: "/cv",
        destination: "https://rxresu.me/bibeka/resume",
        permanent: false,
      },
      {
        source: "/easyaccess",
        destination:
          "https://drive.google.com/drive/folders/1F_OYMSpHlls1ej4KZSX6g2BDkKGt446T",
        permanent: false,
      },
      {
        source: "/easyupload",
        destination: "https://mega.nz/megadrop/fzUsZP-DxgM",
        permanent: false,
      },
      {
        source: "/arlext",
        destination:
          "https://alternativeto.net/lists/41213/browser-extensions-i-cannot-live-without/",
        permanent: false,
      },
      {
        source: "/arlapps",
        destination:
          "https://alternativeto.net/lists/41212/softwares-and-tools-that-i-cannot-live-without/",
        permanent: false,
      },
    ];
  },
};
