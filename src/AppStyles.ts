import styled from 'styled-components'


type ContainerProps = {
    bgColor: string
}

export const Container = styled.div<ContainerProps>
`
background-color: ${props => props.bgColor};
color: white;
padding: 20px;

`

type MyButtonProps = {
    small ?: boolean
}
export const MyButton = styled.button<MyButtonProps>
`
font-size: ${props => props.small ? '15px' : '30px'};

`