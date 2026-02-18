import PageTitle from "@/components/sections/pageTitle"
import TeamesTwo from "@/components/sections/teames/teamesTwo"

const Team = () => {
  return (
    <>
      <PageTitle
        title="Our Team"
        currentPage="Our Team"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
      />
      <TeamesTwo isTitleShow={false} />
    </>
  )
}

export default Team