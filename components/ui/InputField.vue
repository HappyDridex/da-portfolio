<template>
    <div class="input-field">

        <textarea v-if="textAreaMode"
            class="input-field__textarea"
            :class="{ 'input-field_alert': showAlert }"
            cols="30"
            rows="10"
            v-model="newText"
            :placeholder="placeholder"
            @input="onInput"></textarea>

        <input v-else
            class="input-field__input"
            :class="{ 'input-field_alert': showAlert }"
            type="text"
            v-model="newText"
            :placeholder="placeholder"
            @input="onInput">

        <p v-if="showAlert"
            class="input-field__comment">
            {{ alertText }}
        </p>
    </div>
</template>

<script setup>

const emit = defineEmits(["text-changed"]);

const props = defineProps({
    currentText: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: false
    },
    textAreaMode: {
        type: Boolean,
        required: false
    },
    alertText: {
        type: String,
        required: false
    },
    showAlert: {
        type: Boolean,
        required: false
    }
});

const newText = ref(props.currentText);

const onInput = () => {
    emit('text-changed', newText.value);
};

watch(() => props.currentText,
    (newVal) => {
        newText.value = newVal;
    });


</script>

<style scoped>
.input-field__input,
.input-field__textarea {
    border: 1.5px solid var(--gray-dark);
    padding: 22px 33px;
    border-radius: 20px;
    font-size: 18px;
    color: var(--black);
    width: 100%;
    font-family: var(--body-font);
}

.input-field__textarea {
    resize: none;
}

.input-field__textarea::placeholder,
.input-field__input::placeholder {
    font-size: 18px;
    color: var(--black-muted);
}

.input-field__input:focus,
.input-field__textarea:focus {
    border-color: var(--blue);
}

.input-field__comment {
    margin-top: 10px;
    font-size: 18px;
    color: var(--red);
}

.input-field_alert {
    border-color: var(--red);
}
</style>