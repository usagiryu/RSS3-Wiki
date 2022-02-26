# RIP-4: Registered Indexed Items

## Abstract

RIP-2 is used to describe and qualify indexed assets and notes that can be used for RSS3 items.

## Motivation

The RSS3 protocol does not restrict what assets and notes can be indexed, which creates uncertainty in implementation and use.

## Dependencies

- [RIP-1: Registered Account Platforms](./RIP-1.md): as `<platform_symbol>`
- [RIP-3: Registered Decentralized Networks](./RIP-3.md): as `<network_name>`

## TypeScript Validation

```ts
type Item = {
    identifier: ItemURI;
    date_created: string;
    date_updated: string;

    auto: true;
    identifier_instance?: InstanceURI;

    tags?: (AutoAssetType | AutoNoteType | string)[];
    authors: InstanceURI[];
    title?: string;
    summary?: string;
    attachments?: {
        type?: string;
        content?: string;
        address?: URI;
        mime_type: string;
        size_in_bytes?: number;
    }[];

    metadata?: {
        proof: string;
        platform: ItemPlatform;
        from?: string;
        to?: string;
        id: string;
    };
};
```

## Indexed Note Items List

### NFT Acquisition and Loss Activities

#### `tags`

```json
"tags": [
    "NFT",
    "<network_name>"
]
```

`network_name` must be one of [Registered Ethereum Networks Names](#registered-ethereum-networks-names).

#### `attachments`

```json
"attachments": [
    {
        "type": "name",
        "content": "<name>",
        "mime_type": "text/plain"
    },
    {
        "type": "description",
        "content": "<description>",
        "mime_type": "text/plain"
    },
    {
        "type": "object",
        "address": "<object_address>",
        "mime_type": "<object_mime_type>",
        "size_in_bytes": "<object_size_in_bytes>"
    },
    {
        "type": "preview",
        "address": "<preview_address>",
        "mime_type": "<preview_mime_type>",
        "size_in_bytes": "<preview_size_in_bytes>"
    },
    {
        "type": "attributes",
        "content": "[{\"key\":\"<attribute_key>\",\"value\":\"<attribute_value>\"}, ...]",
        "mime_type": "text/json"
    },
    {
        "type": "external_url",
        "content": "<external_url>",
        "mime_type": "text/uri-list"
    }
]
```

#### `metadata`

```ts
"metadata": {
    "platform": "<platform_symbol>",
    "proof": "<transaction_hash>",
    "from": "<transaction_from>",
    "to": "<transaction_to>",

    "token_standard": "<token_standard>",
    "token_id": "<token_id>",
    "token_symbol": "<token_symbol>",

    "collection_address": "<collection_address>",
    "collection_name": "<collection_name>",
}
```

#### Example

Example for [acquisition of RSS3 Whitepaper #1800](https://etherscan.io/token/0xb9619cf4f875cdf0e3ce48b28a1c725bc4f6c0fb)

```json
{
    "identifier": "rss3://account:0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944@evm/note/D52DCF9F-7FF0-400A-9562-66C87DB3A866",
    "date_created": "2022-01-19T02:06:38.000Z",
    "date_updated": "2022-01-19T02:06:38.000Z",

    "auto": true,
    "identifier_instance": "rss3://note:D52DCF9F-7FF0-400A-9562-66C87DB3A866@evm",

    "tags": [
        "NFT",
        "ethereum"
    ],
    "authors": [
        "rss3://account:0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944@evm"
    ],

    "attachments": [
        {
            "type": "name",
            "content": "RSS3 Whitepaper v1.0",
            "mime_type": "text/plain"
        },
        {
            "type": "description",
            "content": "RSS3 Whitepaper v1.0 - Commemorative & Limited Edition",
            "mime_type": "text/plain"
        },
        {
            "type": "object",
            "address": "ipfs://bafybeicij6vw6xcsgwldofnmmh3c3j4w5yiocs6l72yubpbcldxcglkvqe/rss3-whitepaper-no-1800.glb",
            "mime_type": "model/gltf-binary",
            "size_in_bytes": 3983376
        },
        {
            "type": "preview",
            "address": "ipfs://bafybeianto7koyrfwkdjymx7byjrs3hzy7ldipfxc343vra2t7pbd557sy/rss3-whitepaper-no-1800.png",
            "mime_type": "image/png",
            "size_in_bytes": 117310
        },
        {
            "type": "token_info",
            "content": "{\"address\":\"0xb9619cf4f875cdf0e3ce48b28a1c725bc4f6c0fb\",\"name\":\"RSS3 Whitepaper\",\"symbol\":\"RWP\",\"id\":1800}",
            "mime_type": "text/json"
        },
        {
            "type": "attributes",
            "content": "[{\"key\":\"Author(s)\",\"value\":\"Natural Selection Labs\"},{\"key\":\"Edition\",\"value\":\"First Edition\"},{\"key\":\"Edition Language\",\"value\":\"English\"},{\"key\":\"File Format\",\"value\":\"PDF\"},{\"key\":\"No.\",\"value\":1800},{\"key\":\"date\",\"value\":1610323200}]",
            "mime_type": "text/json"
        },
        {
            "type": "external_url",
            "content": "https://rss3.io/RSS3-Whitepaper.pdf",
            "mime_type": "text/uri-list"
        }
    ],

    "metadata": {
        "platform": "ethereum",
        "proof": "0x0b97d6caf6ade4cb0ec6f483463371b97d04fb1a74f72bcc411e480572d712af",
        "from": "0x0000000000000000000000000000000000000000",
        "to": "0xc8b960d09c0078c18dcbe7eb9ab9d816bcca8944",

        "token_standard": "ERC-721",
        "token_id": "1800",
        "token_symbol": "RWP",

        "collection_address": "0xb9619cf4f875cdf0e3ce48b28a1c725bc4f6c0fb",
        "collection_name": "RSS3 Whitepaper"
    }
}
```

#### References

- [Specification | Metaplex Docs](https://docs.metaplex.com/token-metadata/specification)
- [EIP-721: Non-Fungible Token Standard](https://eips.ethereum.org/EIPS/eip-721)

### Mirror Entry Creation

#### `date_created`

#### `date_updated`

#### `tags`

#### `attachments`

#### `metadata`

#### Example
