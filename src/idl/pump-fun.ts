export type PumpFun = {
  address: "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P";
  metadata: {
    name: "pump";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Created with Anchor"
  },
  instructions: [
    {
      name: "buy";
      docs: [
        "Buys tokens from a bonding curve."
      ];
      discriminator: [
        102,
        6,
        61,
        18,
        1,
        218,
        235,
        234
      ];
      accounts: [
        {
          name: "global";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          name: "feeRecipient";
          writable: true
        },
        {
          name: "mint"
        },
        {
          name: "bondingCurve";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                kind: "account";
                path: "mint"
              }
            ]
          }
        },
        {
          name: "associatedBondingCurve";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account";
                path: "bondingCurve"
              },
              {
                kind: "const";
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                kind: "account";
                path: "mint"
              }
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          name: "associatedUser";
          writable: true
        },
        {
          name: "user";
          writable: true,
          signer: true
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111"
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          name: "rent";
          docs: [
            "Unused"
          ];
          address: "SysvarRent111111111111111111111111111111111"
        },
        {
          name: "eventAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          name: "program"
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64"
        },
        {
          name: "maxSolCost";
          type: "u64"
        }
      ]
    },
    {
      name: "create";
      docs: [
        "Creates a new coin and bonding curve."
      ];
      discriminator: [
        24,
        30,
        200,
        40,
        5,
        28,
        7,
        119
      ];
      accounts: [
        {
          name: "mint";
          writable: true,
          signer: true
        },
        {
          name: "mintAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  109,
                  105,
                  110,
                  116,
                  45,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          name: "bondingCurve";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                kind: "account";
                path: "mint"
              }
            ]
          }
        },
        {
          name: "associatedBondingCurve";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account";
                path: "bondingCurve"
              },
              {
                kind: "const";
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                kind: "account";
                path: "mint"
              }
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          name: "global";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          name: "mplTokenMetadata";
          address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          name: "metadata";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                kind: "const";
                value: [
                  11,
                  112,
                  101,
                  177,
                  227,
                  209,
                  124,
                  69,
                  56,
                  157,
                  82,
                  127,
                  107,
                  4,
                  195,
                  205,
                  88,
                  184,
                  108,
                  115,
                  26,
                  160,
                  253,
                  181,
                  73,
                  182,
                  209,
                  188,
                  3,
                  248,
                  41,
                  70
                ]
              },
              {
                kind: "account";
                path: "mint"
              }
            ];
            program: {
              kind: "const";
              value: [
                11,
                112,
                101,
                177,
                227,
                209,
                124,
                69,
                56,
                157,
                82,
                127,
                107,
                4,
                195,
                205,
                88,
                184,
                108,
                115,
                26,
                160,
                253,
                181,
                73,
                182,
                209,
                188,
                3,
                248,
                41,
                70
              ]
            }
          }
        },
        {
          name: "user";
          writable: true,
          signer: true
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111"
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          name: "associatedTokenProgram";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          name: "rent";
          address: "SysvarRent111111111111111111111111111111111"
        },
        {
          name: "eventAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          name: "program"
        }
      ];
      args: [
        {
          name: "name";
          type: "string"
        },
        {
          name: "symbol";
          type: "string"
        },
        {
          name: "uri";
          type: "string"
        },
        {
          name: "creator";
          type: "pubkey"
        }
      ]
    },
    {
      name: "extendAccount";
      docs: [
        "Extends the size of program-owned accounts"
      ];
      discriminator: [
        234,
        102,
        194,
        203,
        150,
        72,
        62,
        229
      ];
      accounts: [
        {
          name: "account";
          writable: true
        },
        {
          name: "user";
          signer: true
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111"
        },
        {
          name: "eventAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          name: "program"
        }
      ];
      args: []
    },
    {
      name: "initialize";
      docs: [
        "Creates the global state."
      ];
      discriminator: [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ];
      accounts: [
        {
          name: "global";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          name: "user";
          writable: true,
          signer: true
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111"
        }
      ];
      args: []
    },
    {
      name: "migrate";
      docs: [
        "Migrates liquidity to pumpAmm if bonding curve is complete"
      ];
      discriminator: [
        155,
        234,
        231,
        146,
        236,
        158,
        162,
        30
      ];
      accounts: [
        {
          name: "global";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          name: "withdrawAuthority";
          writable: true,
          relations: [
            "global"
          ]
        },
        {
          name: "mint"
        },
        {
          name: "bondingCurve";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                kind: "account";
                path: "mint"
              }
            ]
          }
        },
        {
          name: "associatedBondingCurve";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account";
                path: "bondingCurve"
              },
              {
                kind: "const";
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                kind: "account";
                path: "mint"
              }
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          name: "user";
          signer: true
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111"
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          name: "metadataAccount";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                kind: "const";
                value: [
                  11,
                  112,
                  101,
                  177,
                  227,
                  209,
                  124,
                  69,
                  56,
                  157,
                  82,
                  127,
                  107,
                  4,
                  195,
                  205,
                  88,
                  184,
                  108,
                  115,
                  26,
                  160,
                  253,
                  181,
                  73,
                  182,
                  209,
                  188,
                  3,
                  248,
                  41,
                  70
                ]
              },
              {
                kind: "account";
                path: "mint"
              }
            ];
            program: {
              kind: "const";
              value: [
                11,
                112,
                101,
                177,
                227,
                209,
                124,
                69,
                56,
                157,
                82,
                127,
                107,
                4,
                195,
                205,
                88,
                184,
                108,
                115,
                26,
                160,
                253,
                181,
                73,
                182,
                209,
                188,
                3,
                248,
                41,
                70
              ]
            }
          }
        },
        {
          name: "creator";
          docs: [
            "metadata account creators only if creators is not None"
          ];
          writable: true
        },
        {
          name: "pumpAmm";
          address: "pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA"
        },
        {
          name: "pool";
          writable: true
        },
        {
          name: "poolAuthority";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  112,
                  111,
                  111,
                  108,
                  45,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                kind: "account";
                path: "mint"
              }
            ]
          }
        },
        {
          name: "poolAuthorityMintAccount";
          writable: true
        },
        {
          name: "poolAuthorityWsolAccount";
          writable: true
        },
        {
          name: "ammGlobalConfig"
        },
        {
          name: "wsolMint";
          address: "So11111111111111111111111111111111111111112"
        },
        {
          name: "lpMint";
          writable: true
        },
        {
          name: "userPoolTokenAccount";
          writable: true
        },
        {
          name: "poolBaseTokenAccount";
          writable: true
        },
        {
          name: "poolQuoteTokenAccount";
          writable: true
        },
        {
          name: "token2022Program";
          address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          name: "associatedTokenProgram";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          name: "pumpAmmEventAuthority"
        },
        {
          name: "eventAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          name: "program"
        }
      ];
      args: []
    },
    {
      name: "sell";
      docs: [
        "Sells tokens into a bonding curve."
      ];
      discriminator: [
        51,
        230,
        133,
        164,
        1,
        127,
        131,
        173
      ];
      accounts: [
        {
          name: "global";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          name: "feeRecipient";
          writable: true
        },
        {
          name: "mint"
        },
        {
          name: "bondingCurve";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                kind: "account";
                path: "mint"
              }
            ]
          }
        },
        {
          name: "associatedBondingCurve";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account";
                path: "bondingCurve"
              },
              {
                kind: "const";
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                kind: "account";
                path: "mint"
              }
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          name: "associatedUser";
          writable: true
        },
        {
          name: "user";
          writable: true,
          signer: true
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111"
        },
        {
          name: "associatedTokenProgram";
          docs: [
            "Unused"
          ];
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          name: "eventAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          name: "program"
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64"
        },
        {
          name: "minSolOutput";
          type: "u64"
        }
      ]
    },
    {
      name: "setParams";
      docs: [
        "Sets the global state parameters."
      ];
      discriminator: [
        27,
        234,
        178,
        52,
        147,
        2,
        187,
        141
      ];
      accounts: [
        {
          name: "global";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          name: "authority";
          writable: true,
          signer: true,
          relations: [
            "global"
          ]
        },
        {
          name: "eventAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          name: "program"
        }
      ];
      args: [
        {
          name: "initialVirtualTokenReserves";
          type: "u64"
        },
        {
          name: "initialVirtualSolReserves";
          type: "u64"
        },
        {
          name: "initialRealTokenReserves";
          type: "u64"
        },
        {
          name: "tokenTotalSupply";
          type: "u64"
        },
        {
          name: "feeBasisPoints";
          type: "u64"
        },
        {
          name: "withdrawAuthority";
          type: "pubkey"
        },
        {
          name: "enableMigrate";
          type: "bool"
        },
        {
          name: "poolMigrationFee";
          type: "u64"
        },
        {
          name: "creatorFee";
          type: "u64"
        }
      ]
    },
    {
      name: "updateGlobalAuthority";
      discriminator: [
        227,
        181,
        74,
        196,
        208,
        21,
        97,
        213
      ];
      accounts: [
        {
          name: "global";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          name: "authority";
          signer: true,
          relations: [
            "global"
          ]
        },
        {
          name: "newAuthority";
          signer: true
        },
        {
          name: "eventAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          name: "program"
        }
      ];
      args: []
    },
    {
      name: "withdraw";
      docs: [
        "Allows the admin to withdraw liquidity for a migration once the bonding curve completes"
      ];
      discriminator: [
        183,
        18,
        70,
        156,
        148,
        109,
        161,
        34
      ];
      accounts: [
        {
          name: "global";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          name: "lastWithdraw";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  108,
                  97,
                  115,
                  116,
                  45,
                  119,
                  105,
                  116,
                  104,
                  100,
                  114,
                  97,
                  119
                ]
              }
            ]
          }
        },
        {
          name: "mint"
        },
        {
          name: "bondingCurve";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                kind: "account";
                path: "mint"
              }
            ]
          }
        },
        {
          name: "associatedBondingCurve";
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account";
                path: "bondingCurve"
              },
              {
                kind: "const";
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                kind: "account";
                path: "mint"
              }
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          name: "associatedUser";
          writable: true
        },
        {
          name: "user";
          writable: true,
          signer: true
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111"
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          name: "rent";
          docs: [
            "Unused"
          ];
          address: "SysvarRent111111111111111111111111111111111"
        },
        {
          name: "eventAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          name: "program"
        }
      ];
      args: []
    }
  ];
  accounts: [
    {
      name: "BondingCurve";
      discriminator: [
        23,
        183,
        248,
        55,
        96,
        216,
        172,
        96
      ]
    },
    {
      name: "Global";
      discriminator: [
        167,
        232,
        232,
        177,
        200,
        108,
        114,
        127
      ]
    },
    {
      name: "LastWithdraw";
      discriminator: [
        203,
        18,
        220,
        103,
        120,
        145,
        187,
        2
      ]
    }
  ];
  events: [
    {
      name: "CompleteEvent";
      discriminator: [
        95,
        114,
        97,
        156,
        212,
        46,
        152,
        8
      ]
    },
    {
      name: "CompletePumpAmmMigrationEvent";
      discriminator: [
        189,
        233,
        93,
        185,
        92,
        148,
        234,
        148
      ]
    },
    {
      name: "CreateEvent";
      discriminator: [
        27,
        114,
        169,
        77,
        222,
        235,
        99,
        118
      ]
    },
    {
      name: "ExtendAccountEvent";
      discriminator: [
        97,
        97,
        215,
        144,
        93,
        146,
        22,
        124
      ]
    },
    {
      name: "SetParamsEvent";
      discriminator: [
        223,
        195,
        159,
        246,
        62,
        48,
        143,
        131
      ]
    },
    {
      name: "TradeEvent";
      discriminator: [
        189,
        219,
        127,
        211,
        78,
        230,
        97,
        238
      ]
    },
    {
      name: "UpdateGlobalAuthorityEvent";
      discriminator: [
        182,
        195,
        137,
        42,
        35,
        206,
        207,
        247
      ]
    }
  ];
  errors: [
    {
      code: 6000,
      name: "NotAuthorized";
      msg: "The given account is not authorized to execute this instruction."
    },
    {
      code: 6001,
      name: "AlreadyInitialized";
      msg: "The program is already initialized."
    },
    {
      code: 6002,
      name: "TooMuchSolRequired";
      msg: "slippage: Too much SOL required to buy the given amount of tokens."
    },
    {
      code: 6003,
      name: "TooLittleSolReceived";
      msg: "slippage: Too little SOL received to sell the given amount of tokens."
    },
    {
      code: 6004,
      name: "MintDoesNotMatchBondingCurve";
      msg: "The mint does not match the bonding curve."
    },
    {
      code: 6005,
      name: "BondingCurveComplete";
      msg: "The bonding curve has completed and liquidity migrated to raydium."
    },
    {
      code: 6006,
      name: "BondingCurveNotComplete";
      msg: "The bonding curve has not completed."
    },
    {
      code: 6007,
      name: "NotInitialized";
      msg: "The program is not initialized."
    },
    {
      code: 6008,
      name: "WithdrawTooFrequent";
      msg: "Withdraw too frequent"
    },
    {
      code: 6009,
      name: "NewSizeShouldBeGreaterThanCurrentSize";
      msg: "newSize should be > currentSize"
    },
    {
      code: 6010,
      name: "AccountTypeNotSupported";
      msg: "Account type not supported"
    },
    {
      code: 6011,
      name: "InitialRealTokenReservesShouldBeLessThanTokenTotalSupply";
      msg: "initialRealTokenReserves should be less than tokenTotalSupply"
    },
    {
      code: 6012,
      name: "InitialVirtualTokenReservesShouldBeGreaterThanInitialRealTokenReserves";
      msg: "initialVirtualTokenReserves should be greater than initialRealTokenReserves"
    },
    {
      code: 6013,
      name: "FeeBasisPointsGreaterThanMaximum";
      msg: "feeBasisPoints greater than maximum"
    },
    {
      code: 6014,
      name: "AllZerosWithdrawAuthority";
      msg: "Withdraw authority cannot be set to System Program ID"
    },
    {
      code: 6015,
      name: "PoolMigrationFeeShouldBeLessThanFinalRealSolReserves";
      msg: "poolMigrationFee should be less than finalRealSolReserves"
    },
    {
      code: 6016,
      name: "PoolMigrationFeeShouldBeGreaterThanCreatorFeePlusMaxMigrateFees";
      msg: "poolMigrationFee should be greater than creatorFee + MAXMIGRATEFEES"
    },
    {
      code: 6017,
      name: "DisabledWithdraw";
      msg: "Migrate instruction is disabled"
    },
    {
      code: 6018,
      name: "DisabledMigrate";
      msg: "Migrate instruction is disabled"
    },
    {
      code: 6019,
      name: "InvalidCreator";
      msg: "Invalid creator pubkey"
    },
    {
      code: 6020,
      name: "BuyZeroAmount";
      msg: "Buy zero amount"
    },
    {
      code: 6021,
      name: "NotEnoughTokensToBuy";
      msg: "Not enough tokens to buy"
    },
    {
      code: 6022,
      name: "SellZeroAmount";
      msg: "Sell zero amount"
    },
    {
      code: 6023,
      name: "NotEnoughTokensToSell";
      msg: "Not enough tokens to sell"
    },
    {
      code: 6024,
      name: "Overflow";
      msg: "Overflow"
    },
    {
      code: 6025,
      name: "Truncation";
      msg: "Truncation"
    },
    {
      code: 6026,
      name: "DivisionByZero";
      msg: "Division by zero"
    },
    {
      code: 6027,
      name: "NotEnoughRemainingAccounts";
      msg: "Not enough remaining accounts"
    },
    {
      code: 6028,
      name: "AllFeeRecipientsShouldBeNonZero";
      msg: "All fee recipients should be non-zero"
    },
    {
      code: 6029,
      name: "UnsortedNotUniqueFeeRecipients";
      msg: "Unsorted or not unique fee recipients"
    },
    {
      code: 6030,
      name: "CreatorShouldNotBeZero";
      msg: "Creator should not be zero"
    }
  ];
  types: [
    {
      name: "BondingCurve";
      type: {
        kind: "struct";
        fields: [
          {
            name: "virtualTokenReserves";
            type: "u64"
          },
          {
            name: "virtualSolReserves";
            type: "u64"
          },
          {
            name: "realTokenReserves";
            type: "u64"
          },
          {
            name: "realSolReserves";
            type: "u64"
          },
          {
            name: "tokenTotalSupply";
            type: "u64"
          },
          {
            name: "complete";
            type: "bool"
          }
        ]
      }
    },
    {
      name: "CompleteEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "user";
            type: "pubkey"
          },
          {
            name: "mint";
            type: "pubkey"
          },
          {
            name: "bondingCurve";
            type: "pubkey"
          },
          {
            name: "timestamp";
            type: "i64"
          }
        ]
      }
    },
    {
      name: "CompletePumpAmmMigrationEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "user";
            type: "pubkey"
          },
          {
            name: "mint";
            type: "pubkey"
          },
          {
            name: "creator";
            type: {
              option: "pubkey"
            }
          },
          {
            name: "mintAmount";
            type: "u64"
          },
          {
            name: "solAmount";
            type: "u64"
          },
          {
            name: "poolMigrationFee";
            type: "u64"
          },
          {
            name: "creatorFee";
            type: "u64"
          },
          {
            name: "bondingCurve";
            type: "pubkey"
          },
          {
            name: "timestamp";
            type: "i64"
          },
          {
            name: "pool";
            type: "pubkey"
          }
        ]
      }
    },
    {
      name: "CreateEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "string"
          },
          {
            name: "symbol";
            type: "string"
          },
          {
            name: "uri";
            type: "string"
          },
          {
            name: "mint";
            type: "pubkey"
          },
          {
            name: "bondingCurve";
            type: "pubkey"
          },
          {
            name: "user";
            type: "pubkey"
          },
          {
            name: "creator";
            type: "pubkey"
          },
          {
            name: "timestamp";
            type: "i64"
          }
        ]
      }
    },
    {
      name: "ExtendAccountEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "account";
            type: "pubkey"
          },
          {
            name: "user";
            type: "pubkey"
          },
          {
            name: "currentSize";
            type: "u64"
          },
          {
            name: "newSize";
            type: "u64"
          },
          {
            name: "timestamp";
            type: "i64"
          }
        ]
      }
    },
    {
      name: "Global";
      type: {
        kind: "struct";
        fields: [
          {
            name: "initialized";
            type: "bool"
          },
          {
            name: "authority";
            type: "pubkey"
          },
          {
            name: "feeRecipient";
            type: "pubkey"
          },
          {
            name: "initialVirtualTokenReserves";
            type: "u64"
          },
          {
            name: "initialVirtualSolReserves";
            type: "u64"
          },
          {
            name: "initialRealTokenReserves";
            type: "u64"
          },
          {
            name: "tokenTotalSupply";
            type: "u64"
          },
          {
            name: "feeBasisPoints";
            type: "u64"
          },
          {
            name: "withdrawAuthority";
            type: "pubkey"
          },
          {
            name: "enableMigrate";
            type: "bool"
          },
          {
            name: "poolMigrationFee";
            type: "u64"
          },
          {
            name: "creatorFee";
            type: "u64"
          },
          {
            name: "feeRecipients";
            type: {
              array: [
                "pubkey",
                7
              ]
            }
          }
        ]
      }
    },
    {
      name: "LastWithdraw";
      type: {
        kind: "struct";
        fields: [
          {
            name: "lastWithdrawTimestamp";
            type: "i64"
          }
        ]
      }
    },
    {
      name: "SetParamsEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "initialVirtualTokenReserves";
            type: "u64"
          },
          {
            name: "initialVirtualSolReserves";
            type: "u64"
          },
          {
            name: "initialRealTokenReserves";
            type: "u64"
          },
          {
            name: "finalRealSolReserves";
            type: "u64"
          },
          {
            name: "tokenTotalSupply";
            type: "u64"
          },
          {
            name: "feeBasisPoints";
            type: "u64"
          },
          {
            name: "withdrawAuthority";
            type: "pubkey"
          },
          {
            name: "enableMigrate";
            type: "bool"
          },
          {
            name: "poolMigrationFee";
            type: "u64"
          },
          {
            name: "creatorFee";
            type: "u64"
          },
          {
            name: "feeRecipients";
            type: {
              array: [
                "pubkey",
                8
              ]
            }
          },
          {
            name: "timestamp";
            type: "i64"
          }
        ]
      }
    },
    {
      name: "TradeEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "mint";
            type: "pubkey"
          },
          {
            name: "solAmount";
            type: "u64"
          },
          {
            name: "tokenAmount";
            type: "u64"
          },
          {
            name: "isBuy";
            type: "bool"
          },
          {
            name: "user";
            type: "pubkey"
          },
          {
            name: "timestamp";
            type: "i64"
          },
          {
            name: "virtualSolReserves";
            type: "u64"
          },
          {
            name: "virtualTokenReserves";
            type: "u64"
          },
          {
            name: "realSolReserves";
            type: "u64"
          },
          {
            name: "realTokenReserves";
            type: "u64"
          }
        ]
      }
    },
    {
      name: "UpdateGlobalAuthorityEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "global";
            type: "pubkey"
          },
          {
            name: "authority";
            type: "pubkey"
          },
          {
            name: "newAuthority";
            type: "pubkey"
          },
          {
            name: "timestamp";
            type: "i64"
          }
        ]
      }
    }
  ]
}
