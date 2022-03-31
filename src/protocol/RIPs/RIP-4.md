# RIP-4: Registered Link Types

## Abstract

RIP-4 is used to describe and qualify the link types that can be used for RSS4 link.

## Motivation

The RSS4 protocol does not restrict what link types can be used for links, which creates uncertainty in implementation and use.

## For Account Instances

| Link Type | Description |
| -- | -- |
| follow | It represents subscribing to target's notes as a follower. These notes should appear in the follower's timeline by `rss3://<Instance>/list/note?link_type=follow` |
| like | It represents the like for the target. In many applications, the number of received likes is displayed next to the items by the value of `total` returned by `rss3://<Instance>/list/backlink?type=follow&limit=0` |
| collect | It represents bookmarking the target. In some applications, user bookmarks are displayed by `rss3://<Instance>/list/link/collection` |

## For Notes

| Link Type | Description |
| -- | -- |
| comment | It represents this note is a comment on the target. This note is mainly shown at the target's side and may not be displayed in own timeline. In many applications, the number and list of received comments is displayed next to the items by `rss3://<Instance>/list/backlink?type=comment` |
| forward | It represents this note is a repost of the target. This note is mainly displayed in own timeline and may not appear in the target's side. |
| revise | It represents this note is a modified version of the target note. |
