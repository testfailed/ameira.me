
const aboutText = [
  'I have been a tour guide, a terrible waitress and a children’s party entertainer. \
  I went to university in Bristol, a hub for the arts, and was a member of an improvised \
  comedy variety show called The Bish Bosh Bash. We improvised a musical about courgettes \
  falling in love, a true highlight in my improvising career.',

  'I am a trained actress and writer. My passion lies with the arts, \
  so I always add a creative flair to everything I do. Having written \
  short stories, reviews, blog posts, plays and poems, I thrive when \
  embracing a challenge.',
];

const aboutImage = '/assets/home/ameira.jpg'
const aboutImageMobile = '/assets/home/ameira-garden.jpg'

export default function About({ scrollRef }) {
  return (
    <section ref={scrollRef}>
      <div className="flex w-full my-0 md:py-32 flex-col md:flex-row">
        <div className="w-full relative">
          <img
            src={`${process.env.BACKEND_URL}${aboutImage}`}
            alt={`Cover Image for`}
            // className={cn('shadow-small', {
            //   'hover:shadow-medium transition-shadow duration-200': slug,
            // })}
            className="hidden md:block absolute z-0 object-cover w-overlap h-overlap max-w-overlap"
          />
        </div>
        <div className="pt-12 mt-5 md:mt-12 w-full bg-grey-custom px-10 pb-10 h-full z-10">
          <h2 className="text-6xl font-title mb-2 md:mb-0">About Me</h2>
          <img
            src={`${process.env.BACKEND_URL}${aboutImageMobile}`}
            alt={`Cover Image for`}
            className="md:hidden object-cover mb-2 md:mb-2"
          />
          {aboutText.map((paragraph, index) => <p className="py-2 md:py-4 leading-loose font-body" key={index}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  )
}
