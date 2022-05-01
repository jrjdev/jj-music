import NextImage from 'next/image'
import { Box, Divider, List } from '@chakra-ui/layout'
import {
  MdFavorite,
  MdHome,
  MdLibraryMusic,
  MdMusicNote,
  MdPlaylistAdd,
  MdSearch
} from 'react-icons/md'
import { NavItem } from '../domain/domain'
import MenuItem from './menuItem'

const navMenu: NavItem[] = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/'
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search'
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library'
  }
]

const musicMenu: NavItem[] = [
  {
    name: 'Create PlayList',
    icon: MdPlaylistAdd,
    route: '/'
  },
  {
    name: 'Favorites',
    icon: MdFavorite,
    route: '/favorites'
  }
]

// This should be replaced with real data soon!
const playlists = new Array(30)
  .fill(1)
  .map((_, i) => ({ name: `Playlist ${i + 1}`, icon: MdMusicNote, route: '/' }))

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box
          width="120px"
          display="flex"
          alignItems="center"
          marginBottom="20px"
        >
          <NextImage src="/jjMusicLogo.svg" height={40} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((item) => (
              <MenuItem name={item.name} icon={item.icon} route={item.route} />
            ))}
          </List>
        </Box>
        <Box marginY="20px">
          <List spacing={2}>
            {musicMenu.map((item) => (
              <MenuItem name={item.name} icon={item.icon} route={item.route} />
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists.map((item) => (
              <MenuItem name={item.name} icon={item.icon} route={item.route} />
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
