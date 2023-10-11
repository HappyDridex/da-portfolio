import { awaitDomElementReady } from "#imports";

export const useDropdown = (
    parentRef: Ref<HTMLElement | null>,
    childrenClassNames: string,
    dropdownIsOpenedRef: Ref<boolean>
) => {
    const dropdownHeight = ref(0);

    function getDropdownHeight(dropdownIsOpened = false) {
        const menuItems = [...document.querySelectorAll(childrenClassNames)] as HTMLElement[];

        if (!menuItems.length) {
            return 0;
        }

        menuItems.forEach((element) => {
            element.style.boxSizing = "content-box";
        });

        if (!dropdownIsOpened) {
            return menuItems[0]?.offsetHeight || 0;
        } else {
            return menuItems.reduce((acc, el) => {
                return acc + el?.offsetHeight || 0;
            }, 0);
        }
    }

    watch(dropdownIsOpenedRef, (newVal) => {
        dropdownHeight.value = getDropdownHeight(newVal);
    });

    onMounted(async () => {
        await awaitDomElementReady(parentRef.value);
        dropdownHeight.value = getDropdownHeight(dropdownIsOpenedRef.value);
    });

    return { dropdownHeight };
};
