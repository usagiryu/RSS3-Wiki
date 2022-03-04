# Introduction

<div id="logo"></div>

💡 RSS3 Tech Weekly is a brief report offering unique insights into our development progress to the community.

Have a question? You can communicate directly with core developers in the `#💡meet-the-developers` channel of the [RSS3 Discord Server](https://discord.com/invite/rss3).

- [Week 1 - February 18, 2022](./02-18-2022.md)
- [Week 2 - February 25, 2022](./02-25-2022.md)

<script>
import lottie from 'lottie-web';
import DataJson from '@source/images/logo.json';

export default {
    mounted() {
        lottie.loadAnimation({
            container: document.getElementById('logo'), // Required
            animationData: DataJson, // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: true, // Optional
        });
    },
}
</script>
