import { Suspense, useState } from "react";
import dynamic from 'next/dynamic'
import 'react-spring-bottom-sheet/dist/style.css'



export default function Home() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    <button onClick={()=>{setShowModal(!showModal)}} >open</button>
    {showModal && <Modal />}
    </>
  );
}


const Modal = () => {
  const BottomSheet = dynamic(() => import('../test/index'), {
    suspense: true,
  })
  return (
    <Suspense fallback={`Loading...`}>
      <BottomSheet
        open={true}
        // onDismiss={onDismiss}
        snapPoints={({ minHeight }) => minHeight}
      >
        <p>
          Using onDismiss lets users close the sheet by swiping it down, tapping
          on the backdrop or by hitting on their keyboard.
        </p>

        <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
        <p>The height adjustment is done automatically, it just works™!</p>
        <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
      </BottomSheet>
    </Suspense>
  )
}
