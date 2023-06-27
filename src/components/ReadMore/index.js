import {useState} from 'react'

import {
  MainContainer,
  Heading,
  Description,
  Image,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [buttonStatus, setButtonText] = useState(true)

  const onClickButton = () => {
    setButtonText(prevButtonStatus => !prevButtonStatus)
  }

  const buttonText = buttonStatus ? 'Read More' : 'Read Less'
  const description = buttonStatus
    ? reactHooksDescription.slice(0, 171)
    : reactHooksDescription

  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Description>Hooks are a new addition to react</Description>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{description}</Description>
      <Button onClick={onClickButton}>{buttonText}</Button>
    </MainContainer>
  )
}

export default ReadMore
