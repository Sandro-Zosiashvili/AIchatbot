import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Menuitem from '../Menuitem/Menuitem'
import styles from './Menu.module.scss'




const Menu = () => {



    return (

        <div className={styles.container}>
            <Logo />
            <Menuitem />
            <Button title={'Get started free'} />

        </div>


    )
}


export default Menu