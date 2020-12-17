import {
    Container,
    Title,
    Wrapper,
    WrapperTitle,
    WrapperText,
    Button,
} from './styles/store'

export default function Store({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Store.Title = function StoreTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Store.Wrapper = function StoreWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}
Store.WrapperTitle = function StoreWrapperTitle({ children, ...restProps }) {
    return <WrapperTitle {...restProps}>{children}</WrapperTitle>
}
Store.WrapperText = function StoreWrapperText({ children, ...restProps }) {
    return <WrapperText {...restProps}>{children}</WrapperText>
}
Store.BuyButton = function StoreBuyButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}
Store.SellButton = function StoreSellButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}