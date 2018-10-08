<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-content">
                        <slot name="content"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(1, 5, 6, .3);
    transition: opacity .3s ease;
}
.modal-wrapper {
    vertical-align: middle;
}
.modal-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    max-width: 100%;
    background-color:  whitesmoke;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .66);
    border-radius: 5px;
}
.modal-content {
    text-align: center;
}
</style>