<template>
    <section class="contact-me"
        id="contact-me">
        <h2 class="contact-me__title">
            Связь со мной
        </h2>

        <div class="contact-me__content">
            <form class="contact-me__form contact-form"
                @submit.prevent="onSubmit">

                <UiInputField class="contact-form__input"
                    :current-text="form.name"
                    :placeholder="'Введите своё имя'"
                    :alert-text="'Поле не заполнено'"
                    :show-alert="showAlert.name"
                    @text-changed="(text) => onTextChanged(text, 'name')" />

                <UiInputField class="contact-form__input"
                    :current-text="form.email"
                    :placeholder="'Введите свой Email'"
                    :alert-text="'Поле не заполнено'"
                    :show-alert="showAlert.email"
                    @text-changed="(text) => onTextChanged(text, 'email')" />

                <UiInputField class="contact-form__input"
                    :current-text="form.description"
                    text-area-mode
                    :placeholder="'Расскажите суть Вашей задачи'"
                    :alert-text="'Поле не заполнено'"
                    :show-alert="showAlert.description"
                    @text-changed="(text) => onTextChanged(text, 'description')" />

                <UiDropdownMenu class="contact-form__dropdown" />

                <UiButtonSubmit class="contact-form__submit-button"
                    :button-text="'Отправить'" />
            </form>

            <figure class="contact-illustration">
                <img class="contact-illustration__image"
                    src="/media/images/contact.jpg"
                    alt="Иллюстрация">
            </figure>
        </div>
    </section>
</template>


<script setup>
import { getKeyByValue } from "@/utils/helpers";

const form = reactive({
    name: "",
    email: "",
    description: ""
});

const showAlert = reactive({
    name: false,
    email: false,
    description: false
});

const onTextChanged = (text, key) => {
    form[key] = text;
};


const onSubmit = () => {
    for (let key in form) {
        if (!form[key].length) {
            showAlert[key] = true;
        } else {
            showAlert[key] = false;
        }
    }
    if (Object.values(showAlert).some(val => val)) {
        return;
    }
};

watch(() => [form.name, form.email, form.description],
    (newVal, oldVal) => {
        for (let idx in newVal) {
            const value = newVal[idx];
            if (value !== oldVal[idx]) {
                const key = getKeyByValue(form, value);
                if (key) {
                    showAlert[key] = false;
                }
            }
        }
    })

</script>

<style scoped>
.contact-me__content {
    display: flex;
    gap: 56px;

    @media(max-width: 768px) {
        gap: 35px;
    }
}

.contact-me__title {
    width: fit-content;
    margin: 0 auto;
    font-size: 40px;
    font-weight: 500;

    @media(max-width: 768px) {
        font-size: 25px;
    }
}

.contact-me__content {
    margin-top: 70px;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
        margin-top: 40px;
    }
}

.contact-me__form,
.contact-me__illustration {
    width: 50%;
    height: 100%;
    max-height: 479px;
    flex-shrink: 0;

    @media(max-width: 768px) {
        width: 100%;
    }
}

.contact-form__input+.contact-form__input,
.contact-form__submit-button,
.contact-form__dropdown {
    margin-top: 20px;

    @media(max-width: 768px) {
        margin-top: 14px;
    }
}


.contact-form__submit-button {
    width: 100%;
}

.contact-illustration {
    overflow: hidden;
    border-radius: 20px;
}

.contact-illustration__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>