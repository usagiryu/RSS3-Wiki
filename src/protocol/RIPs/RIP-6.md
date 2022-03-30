# RIP-6: Registered Link Sources

## Abstract

RIP-6 is used to describe and qualify the link sources that can be indexed by RSS3.

## Motivation

The RSS3 protocol does not restrict what source can be used for link, which creates uncertainty in implementation and use.

## Service List

| Service ID | Service Name | Service Website | Account Platform |
| -- | -- | -- | -- |
| 0 | Crossbell | TODO | Ethereum |
| 1 | Lens | <https://lens.dev/> | Ethereum |

## Responses

```ts
type Link = {
    date_created: string;
    from: InstanceURI;
    to: InstanceURI;
    type: LinkType;

    metadata?: {
        network: LinkNetworkName;
        proof: string;

        [key: string]: any;
    };
}
```

### Crossbell

TODO

### Lens

TODO
