interface RentingListItem {
    label: string,
    icon: string,
    items: {
        label: string,
        items: {
            label: string
        }[]
    }[]
}