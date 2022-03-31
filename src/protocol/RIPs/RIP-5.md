# RIP-5: Registered Profile Sources

## Abstract

RIP-5 is used to describe and qualify the profile sources that can be indexed by RSS4.

## Motivation

The RSS4 protocol does not restrict what source can be used for profile, which creates uncertainty in implementation and use.

## Source List

| Source ID | Source Name | Source Website | Used Account Platform |
| -- | -- | -- | -- |
| 0 | Crossbell | TODO | Ethereum |
| 1 | ENS | <https://ethereum.org/> | Ethereum |
| 2 | Lens | <https://lens.dev/> | Ethereum |

## Responses

```ts
type Profile = {
    date_created: string;
    date_updated: string;

    name?: string;
    avatars?: URI[];
    bio?: string;
    attachments?: {
        type?: string;
        content?: string;
        address?: URI;
        mime_type: string;
        size_in_bytes?: number;
    }[];

    connected_accounts?: AccountInstanceURI[];

    source: ProfileSource;

    metadata?: {
        network: NetworkName;
        proof: string;

        [key: string]: any;
    };
}
```

### Crossbell

TODO

### ENS

diygod.eth

[ENS Page](https://app.ens.domains/name/diygod.eth/details)

```json
{
    "date_created": "2021-11-16T05:54:430Z",
    "date_updated": "2021-11-16T05:54:430Z",
    "name": "diygod.eth",
    "avatars": [
        "ipfs://QmT1zZNHvXxdTzHesfEdvFjMPvw536Ltbup7B4ijGVib7t"
    ],

    "attachments": [
        {
            "type": "date_expiration",
            "content": "2031-11-16T16:06:43.000Z",
            "mime_type": "text/plain",
        }
    ],

    "source": "ENS",

    "metadata": {
        "network": "Ethereum",
        "proof": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85-38772411775600185392141164298857056901123186294823286690051165662418535698832",
    },
}
```

### Lens

TODO
