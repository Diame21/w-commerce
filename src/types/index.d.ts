export type OrderItem = {
    name: string
    slug: string
    qty: number
    image: string
    price: number
    color: string
    size: string
}

export type ShippingAddress = {
    fullName: string
    address: string
    city: string
    postalCode: string
    country: string
}

export type Order = {
    _id: string
    user?: { name: string }
    itemsPrice: number
    shippingPrice: number
    taxPrice: number
    totalPrice: number
    isPaid: boolean
    isDelivered: boolean
    paidAt?: string
    deliveredAt?: string
    orderItems: OrderItem[]
    shippingAddress: ShippingAddress
    paymentResult?: { id: string; status: string; email_address: string }
    createdAt: string
}

export type Product = {
    _id?: string
    name: string
    slug: string
    image: string
    images?: string[]
    banner?: string
    price: number
    brand: string
    description: string
    category: string
    rating: number
    numReviews: number
    countInStock: number
    colors?: []
    sizes?: []
    isFeatured?: boolean
}
