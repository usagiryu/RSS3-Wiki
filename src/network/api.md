# API

## Introduction

[Source code](https://github.com/NaturalSelectionLabs/RSS4-Pre-Node)

[![RSS4](https://badge.rss3.workers.dev/?version=v0.3.1)](https://github.com/NaturalSelectionLabs/RSS4/blob/main/versions/v0.3.1.md)

While actively working on our ultimate goal, a fully decentralized node, a temporarily centralized version is currently available, you can use <https://prenode.rss3.dev> as the node entry point.

## Supported name service

Same as [Web3 Name Service](https://github.com/NaturalSelectionLabs/Web3-Name-Service)

- ENS: *.eth
- DAS: *.bit
- RNS: *.rss3

## Supported account

- EVM+
- Twitter
- Misskey
- Jike

## Supported auto assets

- Gitcoin.Donation
- xDai.POAP
- BSC.NFT
- Ethereum.NFT
- Polygon.NFT
- Mirror.XYZ (to be removed)

## Supported auto items

- Gitcoin.Donation
- xDai.POAP
- BSC.NFT
- Ethereum.NFT
- Polygon.NFT
- Mirror.XYZ
- Twitter
- Misskey
- Jike

## API

-   GET `/:fid` - get a file

Example:

Get `0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944` index file

<https://prenode.rss3.dev/0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944>

-   PUT `/` - change a file

Body parameter

| Name     | Optional | Description              |
| -------- | -------- | ------------------------ |
| files    | false    | Array of files' contents |

-   GET `/assets/details`

Get details of the assets

Query parameter

| Name     | Optional | Description              |
| -------- | -------- | ------------------------ |
| assets   | false    | The ids of wanted assets, separated by commas |
| full     | true    | Whether to return detailed information |

Example:

Get details of two assets `EVM+-0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-Ethereum.NFT-0xacbe98efe2d4d103e221e04c76d7c55db15c8e89.5` and `EVM+-0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-Polygon.NFT-0x548cee4ee43ecd2fb4716c490d3da315069d8114.3`

<https://prenode.rss3.dev/assets/details?assets=EVM%2B-0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-Ethereum.NFT-0xacbe98efe2d4d103e221e04c76d7c55db15c8e89.5,EVM%2B-0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944-Polygon.NFT-0x548cee4ee43ecd2fb4716c490d3da315069d8114.3&full=1>

-   GET `/items/list`

Get the aggregated auto and custom items, sorted by time

Query parameter

| Name     | Optional | Description              |
| -------- | -------- | ------------------------ |
| limit   | true    | Limit on the number of lists |
| tsp     | true    | Time in RFC 3339 format, returns items before this time |
| persona     | false    |  |
| linkID     | true    |  |
| fieldLike     | true    | Filters for target.field, separated by commas |

Example:

Get aggregated items of `0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944`

<https://prenode.rss3.dev/items/list?limit=5&persona=0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944>

Get aggregated items of personas who followed by `0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944`

<https://prenode.rss3.dev/items/list?limit=5&persona=0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944&linkID=following>

Get NFT and Gitcoin related aggregated items of `0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944`

<https://prenode.rss3.dev/items/list?limit=5&persona=0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944&fieldLike=NFT,Gitcoin>

-   GET `/profile/list`

Get profile of given persona list

Query parameter

| Name     | Optional | Description              |
| -------- | -------- | ------------------------ |
| personas    | false | Array of files' contents |

Example:

Get profile of `0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944` and `0xee8fEeb6D0c2fC02Ef41879514A75d0E791b5061`

<https://prenode.rss3.dev/profile/list?personas=0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944,0xee8fEeb6D0c2fC02Ef41879514A75d0E791b5061>
