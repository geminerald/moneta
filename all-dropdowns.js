const menuData = [
    {
        name: "Dropdowns and Notes",
        children: [
            {
                name: "Account Admin",
                children: [
                    {
                        name: "Statement Request",
                        children: [
                            {
                                name: "Email Statement",
                                children: [
                                    {
                                        name: "Click to Copy",
                                        isCopyNote: true,
                                        tooltip: "Customer called in to request a statement. Generated email statement for the customer and send them the link to request it themselves in future. Customer happy"
                                    }
                                ]
                            },
                            {
                                name: "Postal Statement",
                                children: [
                                    {
                                        name: "Click to Copy",
                                        isCopyNote: true,
                                        tooltip: "Customer called in to request a statement. Offered email statement to the customer but they need a physical copy. I requested the postal statement and sent them the link to request it themselves in future. Customer happy"
                                    }
                                ]
                            },
                            {
                                name: "Option 3 Statement",
                                children: [
                                    {
                                        name: "Click to Copy",
                                        isCopyNote: true,
                                        tooltip: "The Customer called in to request a different statement. Customer going to the CRU."
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Name Add Request",
                        children: [
                            {
                                name: "Click to Copy",
                                isCopyNote: true,
                                tooltip: "This note will be copied."
                            }
                        ]
                    }
                ]
            },
            {
                name: "Meter Management",
                children: [
                    {
                        name: "ESB Meter Change",
                        children: [
                            {
                                name: "Click to Copy",
                                isCopyNote: true,
                                tooltip: "This note will be copied."
                            }
                        ]
                    },
                    {
                        name: "Upgrade/Downgrade Request"
                    }
                ]
            }]
    }
];
