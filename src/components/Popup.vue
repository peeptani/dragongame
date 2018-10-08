<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-content">
                        <slot name="content"></slot>
                        <slot name="info"></slot>
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
.modal-body {
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}
.modal-leave-active {
    opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(0.1);
}
</style>