import { AuthContexts } from '@contexts/AuthContexts';
import {useContext} from 'react'

export function useAuth () {
  const contexts = useContext(AuthContexts)

  return contexts;
}