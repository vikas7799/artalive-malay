export const menuData = [
  {
    label: "Rumah",
    href: "/",
  },
  {
    label: "Tentang Kami",
    href: "/tentang-kami",
  },

  {
    label: "Perkhidmatan",
    href: "/perkhidmatan",
    children: [
      {
        label: "Prostetik",
        href: "/prostetik",
        submenu: [
          {
            label: "Prostetik Anggota Bawah",
            href: "/prostetik-anggota-bawah",
            icon: "fa-solid fa-socks card-icon c1",
          },
          {
            label: "Prostetik Anggota Atas",
            href: "/prostetik-anggota-atas",
            icon: "fa-solid fa-hand card-icon c2",
          },
          {
            label: "Prostetik Khas",
            href: "/prostetik-khas",
            icon: "fa-solid fa-shoe-prints card-icon c3",
          },
        ],
      },
      {
        label: "Ortotik",
        href: "/ortotik",
        submenu: [
          {
            label: "Ortotik Anggota Bawah",
            href: "/ortotik-anggota-bawah",
            icon: "fa-solid fa-wheelchair-move card-icon c7",
          },
          {
            label: "Ortotik Anggota Atas",
            href: "/ortotik-anggota-atas",
            icon: "fa-solid fa-bacon card-icon c8",
          },
          {
            label: "Ortotik Khas",
            href: "/ortotik-khas",
            icon: "fa-solid fa-circle-half-stroke card-icon c9",
          },
        ],
      },

      {
        label: "Pediatrik",
        href: "/pediatrik",
        submenu: [
          {
            label: "Pengukuhan Anggota Bawah",
            href: "/pengukuhan-anggota-bawah",
            icon: "fa-solid fa-wheelchair-move card-icon c7",
          },
          {
            label: "Pendakap Scoliosis",
            href: "/pendakap-scoliosis",
            icon: "fa-solid fa-bacon card-icon c8",
          },
          {
            label: "Topi Keledar Tengkorak",
            href: "/topi-keledar-tengkorak",
            icon: "fa-solid fa-circle-half-stroke card-icon c9",
          },
          {
            label: "Pediatrik Prostetik",
            href: "/pediatrik-prostetik",
            icon: "fa-solid fa-circle-half-stroke card-icon c9",
          },
        ],
      },
      {
        label: "Penyelesaian Penjagaan Kaki",
        href: "/penyelesaian-penjagaan-kaki",
        submenu: [
          {
            label: "Penyelesaian Penjagaan Kaki",
            href: "/penyelesaian-penjagaan-kaki",
            icon: "fa-solid fa-hand-holding-hand card-icon c1",
          },
        ],
      },
      {
        label: "MyoPro Orthosis",
        href: "/myopro-orthosis",
        submenu: [
          {
            label: "MyoPro Orthosis",
            href: "/myopro-orthosis",
          },
        ],
      },
      {
        label: "Prostetik 3D",
        href: "/prostetik-3d",
        submenu: [
          {
            label: "Prostetik 3D",
            href: "/prostetik-3d",
          },
        ],
      },
    ],
  },

  {
    label: "Hubungi Kami",
    href: "/hubungi-kami",
  },
];
