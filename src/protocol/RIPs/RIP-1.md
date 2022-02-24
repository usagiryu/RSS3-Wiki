# RIP-1: Registered Account Platforms

## Abstract

RIP-1 is used to describe and qualify the accounts that can be used for RSS3.

## Motivation

The RSS3 protocol does not restrict which platform accounts can be used, which creates uncertainty in implementation and use.

## Account Platform List

### Cryptography-based Decentralized Platforms

Cryptography-based decentralized platforms do not require a centralized server, but use a public signature algorithm for authentication.

The accounts of these platforms can be used for both Main Account and Connected Accounts.

| Name | Symbol | Platform Website | Example | Address and Signature Algorithms |
| -- | -- | -- | -- | -- |
| Ethereum | ethereum | <https://ethereum.org> | 0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944@ethereum | <https://ethereum.org/en/developers/docs/accounts/> |
| Solana | solana | <https://solana.com> | 42jYG1DjDeGq8VgKtah1yR45MXU1uxThFxXukb6QBKMY@solana | <https://docs.solana.com/terminology#account> |
| Flow | flow | <https://www.onflow.org/> | 0xff2da663c7033313@flow | <https://docs.onflow.org/> |

### Centralized Platforms

Centralized platforms require centralized servers for authentication. The user must put the address or name (Refer to [RIP-2: Registered Name Services](./RIPs/RIP-2.md)) of the Main Account into some location in the platform's account configuration to verify ownership.

The accounts of these platforms can only be used for Connected Accounts.

| Name | Symbol | Platform Website | Example | Address or Name Location |
| -- | -- | -- | -- | -- |
| Twitter | twitter | <https://twitter.com> | rss3_@twitter | Username, Name, Bio, Website, Pinned tweet |
| Misskey | misskey | <https://misskey-hub.net/> | Candinya@nya.one@misskey | Name, Bio, Labels, Pinned notes |
| 即刻 | jike | <https://web.okjike.com/> | 3EE02BC9-C5B3-4209-8750-4ED1EE0F67BB@jike | 昵称, 签名 |
| PlayStation | playstation | <https://www.playstation.com/> | DIYgod_@playstation | Online ID, Name, About |
| GitHub | github | <https://github.com/> | DIYgod@github | Name, Bio, Company, Website |
