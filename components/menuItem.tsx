import { LinkBox, LinkOverlay, ListIcon, ListItem } from '@chakra-ui/layout'
import NextLink from 'next/link'
import { NavItem } from '../domain/domain'

const MenuItem = ({ name, icon, route }: NavItem) => {
  return (
    <ListItem paddingX="20px" fontSize="16px" key={name}>
      <LinkBox>
        <NextLink href={`${route}`} passHref>
          <LinkOverlay>
            <ListIcon as={icon} color="white" marginRight="20px" />
            {name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  )
}

export default MenuItem
