export const dataSidebarSteps = [
    'your info',
    'select plan',
    'add-ons',
    'summary',
]

export interface ValidType {
    errorText: string
    isValid: boolean | null
}

export interface AddonsType {
    title: string
    desc: string
    priceMonth: number
    priceYear: number
    chosedPrice?: number | undefined | null
    isChecked: boolean
    id: number
}

export interface selectedAddonsType {
    chosedPrice: undefined | number
    type: string
    title: string
}

export const addonsData: AddonsType[] = [
    {
        title: 'Online service',
        desc: 'Access to multiplayer games',
        priceMonth: 1,
        priceYear: 10,
        chosedPrice: null,
        isChecked: false,
        id: 666,
    },
    {
        title: 'Larger storage',
        desc: 'Extra 1TB of cloud save',
        priceMonth: 2,
        priceYear: 20,
        chosedPrice: null,
        isChecked: false,
        id: 444,
    },
    {
        title: 'Customizable profile',
        desc: 'Custom theme on your profile',
        priceMonth: 2,
        priceYear: 20,
        chosedPrice: null,
        isChecked: false,
        id: 555,
    },
]

export interface personalDataType {
    name: string
    email: string
    phone: string
}

export const personalData = {
    name: '',
    email: '',
    phone: '',
}

export interface selectPlanType {
    name: string
    icon: string
    priceMonth: number
    priceYear: number
    chosedPrice?: number | undefined | null
    free?: string
}

export interface selectedPlanType {
    chosedPrice: number | undefined
    name: string
    priceMonth: number
    priceYear: number
    type: string | undefined
}

export const planData: selectPlanType[] = [
    {
        name: 'arcade',
        icon: '/images/icon-arcade.svg',
        priceMonth: 9,
        priceYear: 90,
        chosedPrice: null,
        free: '2 months free',
    },
    {
        name: 'advanced',
        icon: '/images/icon-advanced.svg',
        priceMonth: 12,
        priceYear: 120,
        chosedPrice: null,
        free: '2 months free',
    },
    {
        name: 'pro',
        icon: '/images/icon-pro.svg',
        priceMonth: 15,
        priceYear: 150,
        chosedPrice: null,
        free: '2 months free',
    },
]
