import Head from 'next/head'
import { useState, useEffect } from 'react'

import { Lightbox } from 'react-modal-image'

export default function Home({}) {
    const [htmlFile, setHtmlFile] = useState()
	const [isModalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        const fetchHtml = async () => {
            const html = await fetch('/index.html')
            const htmlString = await html.text()
            setHtmlFile(htmlString)
        }

        fetchHtml()
    })

	const openModal = () => {
		setModalOpen(true)
		window.dataLayer && window.dataLayer.push({
			'event': 'IMAGE_VIEW',
            'time_stamp': `${new Date()}`
		})
	}

	const closeModal = () => {
		setModalOpen(false)
	}

    const onResumeClick = () => {
	    window.dataLayer && window.dataLayer.push({
			'event': 'RESUME_VIEW',
            'time_stamp': `${new Date()}`
		})
	}

    const onXingzheClick = () => {
	    window.dataLayer && window.dataLayer.push({
			'event': 'XINGZHEFANGCHE_VIEW',
            'time_stamp': `${new Date()}`
		})
	}

	useEffect(() => {
		document.getElementById('avatar')?.addEventListener('click', openModal)
        document.getElementById('resume')?.addEventListener('click', onResumeClick)
        document.getElementById('xingzhefangche')?.addEventListener('click', onXingzheClick)
	})

  return (
    <div>
      <Head>
        <title>Tianya Liu</title>
        <meta name="description" content="Tianya's personal website" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

			{isModalOpen && 
				<Lightbox
					large={'/img/avatar.jpg'}
					onClose={closeModal}
				/>}

      <div
        dangerouslySetInnerHTML={{
          __html: htmlFile
        }}
      />
    </div>
  )
}

export async function getServerSideProps ({ req, res, query }) {

  return {
    props: {}
  }
}
