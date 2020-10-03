import $$ from '@utilities/selectors'

const MobileNav = function MobileNav()
{
    $$.mobileNavToggle.addEventListener('click', function() {

        this.classList.toggle('menu-toggle-active')
        $$.mobileNav.classList.toggle('menu-visible')

        // set aria-expanded attribute on menu toggle button
        if ( this.getAttribute('aria-expanded') === 'false' )
        {

            this.setAttribute('aria-expanded', 'true')

        } else {

            this.setAttribute('aria-expanded', 'false')

        }

    });

    const arr = [...$$.mobileNavElements];
    arr.forEach( e => {
        e.addEventListener('click', function() {

            $$.mobileNavToggle.classList.toggle('menu-toggle-active')
            $$.mobileNav.classList.toggle('menu-visible')
    
            // set aria-expanded attribute on menu toggle button
            if ( $$.mobileNavToggle.getAttribute('aria-expanded') === 'false' )
            {
    
                $$.mobileNavToggle.setAttribute('aria-expanded', 'true')
    
            } else {
    
                $$.mobileNavToggle.setAttribute('aria-expanded', 'false')
    
            }
    
        })
    });

}()

export default MobileNav
