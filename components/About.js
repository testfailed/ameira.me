
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

export default function About() {
  return (
    <section>
      <div className="flex w-full my-32">
        <div className="w-full relative">
        <img
          src={`${process.env.BACKEND_URL}${aboutImage}`}
          alt={`Cover Image for`}
          // className={cn('shadow-small', {
          //   'hover:shadow-medium transition-shadow duration-200': slug,
          // })}
          className="absolute z-0"
          style={{
            width: '110%',
            maxWidth: '110%',
            height: '110%',
            objectFit: 'cover',
          }}
        />
        </div>
        <div className="mt-16 w-full bg-gray-200 p-10 h-full z-10" style={{ fontFamily: 'Raleway, serif' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-6xl">About Me</h2>
          {aboutText.map((paragraph, index) => <p className="py-4 leading-loose" key={index}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  )
}
