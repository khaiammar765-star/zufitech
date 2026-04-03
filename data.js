const pcProducts = [
    // ── ENTRY GAMING ────────────────────────────────────────────
    {
        id: "corepro-1000",
        name: "CorePro 1000",
        basePrice: 3899, // Harga pasaran realistik
        category: "gaming",
        badge: "Best Starter",
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800",
        specs: "AMD Ryzen 5 7600 | RTX 4060 | 16 GB DDR5 | 1 TB NVMe SSD | 240mm AIO",
        upgradeGroups: {
            CPU: [
                { label: "Upgrade to Ryzen 7 7700", price: 450 }
            ],
            GPU: [
                { label: "Upgrade to RTX 4060 Ti", price: 550 },
                { label: "Upgrade to RTX 4070 SUPER", price: 1500 }
            ],
            Memory: [
                { label: "Upgrade to 32GB DDR5 6000MHz", price: 250 }
            ],
            Storage: [
                { label: "Upgrade to 2TB NVMe SSD", price: 300 }
            ]
        }
    },
    {
        id: "strikepro-1500",
        name: "StrikePro 1500",
        basePrice: 5199, // Turunkan dari RM7200
        category: "gaming",
        badge: "",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800",
        specs: "AMD Ryzen 5 7600X | RTX 4060 Ti | 32 GB DDR5 | 1 TB Gen4 NVMe | 240mm AIO",
        upgradeGroups: {
            CPU: [
                { label: "Upgrade to Ryzen 7 7800X3D", price: 900 }
            ],
            GPU: [
                { label: "Upgrade to RTX 4070 SUPER", price: 1100 },
                { label: "Upgrade to RTX 4070 Ti SUPER", price: 2100 }
            ],
            Storage: [
                { label: "Upgrade to 2TB Gen4 NVMe", price: 350 }
            ]
        }
    },

    // ── PRO GAMING ──────────────────────────────────────────────
    {
        id: "zufipro-3000",
        name: "ZufiPro 3000",
        basePrice: 10599, // Kekal, ni dah agak ngam untuk 4080 SUPER
        category: "gaming",
        badge: "Most Popular",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800",
        specs: "Intel Core i7-14700KF | RTX 4080 SUPER | 32 GB DDR5 | 2 TB NVMe SSD | 360mm AIO",
        upgradeGroups: {
            Memory: [{ label: "Upgrade to 64GB DDR5 6400MHz", price: 650 }],
            Cooling: [{ label: "Lian Li LCD AIO Upgrade", price: 500 }],
            Display: [{ label: "Add 4K 144Hz Monitor Bundle", price: 1800 }]
        }
    },

    // ── WORKSTATION ───────────────────────────────────────────────
    {
        id: "apex-titan",
        name: "Apex Titan X",
        basePrice: 19999, // Harga ngam untuk 4090 + Custom Loop
        category: "workstation",
        badge: "Top Tier",
        image: "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&fit=crop&q=80&w=800",
        specs: "Intel Core i9-14900K | RTX 4090 | 64 GB DDR5 | 4 TB NVMe SSD | Custom Loop",
        upgradeGroups: {
            Memory: [{ label: "128GB DDR5 Corsair Dominator", price: 1200 }],
            GPU: [{ label: "Vertical Mount Kit + Premium Riser", price: 350 }]
        }
    },
    {
        id: "zufi-studio",
        name: "Zufi Studio Pro",
        basePrice: 28999, // Turunkan dari RM45000. 28k lebih masuk akal untuk Threadripper
        category: "workstation",
        badge: "Professional",
        image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800",
        specs: "AMD Threadripper 7960X | RTX 4080 SUPER | 128 GB DDR5 ECC | 8 TB NVMe RAID | 420mm AIO",
        upgradeGroups: {
            CPU: [
                { label: "Upgrade to Threadripper 7970X", price: 3500 }
            ],
            GPU: [
                { label: "Upgrade to RTX 4090", price: 3500 },
                { label: "Swap to NVIDIA RTX 6000 Ada", price: 25000 }
            ],
            Storage: [
                { label: "Upgrade to 16TB NVMe RAID", price: 4000 }
            ]
        }
    },

    // ── EXTREME / SIGNATURE ───────────────────────────────────────
    {
        id: "signature-build",
        name: "Zufitech Signature Build",
        basePrice: 42999, // INI BARU LOGIK UNTUK DUAL 4090 + CUSTOM LOOP!
        category: "extreme",
        badge: "Showcase",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800", 
        specs: "Intel Core i9-14900K | Dual RTX 4090 Link | 128GB DDR5 | Custom Hard-Line Loop",
        upgradeGroups: {
            "Aesthetics": [
                { label: "Laser Etched Glass Panel", price: 450 },
                { label: "Premium Cable Sleeving (Cyan/Black)", price: 300 }
            ],
            "Performance": [
                { label: "Delid & Direct Die Cooling", price: 800 }
            ]
        }
    }
];