import { useLoading, Oval } from '@agney/react-loading'

import styles from './Loader.module.css'
export const Loader = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: < Oval width="150" color="white" />
  })
  return (
    <div
    {...containerProps}
    className={styles.loaderContainer}>
        {indicatorEl}
        <h1>Cargando</h1>
    </div>
  )
}
