<template>
    <figure class="product-designer-preview">
        <video class="product-designer-preview__video"
            autoplay
            loop
            muted
            src="/media/videos/symbolic-animation.mp4"></video>
    </figure>
</template>

<style scoped>
.product-designer-preview {
    height: 412px;
    background: var(--blue-light);
    border-radius: 20px;
    overflow: hidden;
}

.product-designer-preview__video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 25px 0;
}

@media(max-width: 768px) {
    .product-designer-preview {
        height: 257px;
    }
}
</style>