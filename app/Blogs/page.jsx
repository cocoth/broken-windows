import NotificationMenu from '@/components/navigation-bar/windows-components/notification-menu'

const Main = () => {
  return (
    <main>
      <div className='min-h-screen flex bg-gray-500 justify-center items-center text-white'>
        asdfasdf
          {/* <div className="relative h-10 ">

              <section className=''>
                  <img src="/img/chrome-icon.png" alt="chrome" />
              </section>

          </div> */}
          <nav className='fixed bottom-0 left-0'>
            <NotificationMenu/>
          </nav>
      </div>
    </main>
  )
}

export default Main