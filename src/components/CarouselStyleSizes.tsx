import * as React from 'react'
import { Card } from '@/components/retroui/Card'
import { Carousel } from '@/components/retroui/Carousel'

export default function CarouselStyleSizes() {
  const [api, setApi] = React.useState<any | null>(null)

  React.useEffect(() => {
    if (!api) return
    const id = setInterval(() => {
      try {
        api?.scrollNext()
      } catch (e) {}
    }, 2400)

    return () => clearInterval(id)
  }, [api])

  return (
    <div className="w-full flex justify-center px-6 py-12">
      <Carousel className="w-full max-w-6xl" setApi={setApi} opts={{ loop: true }}>
        <Carousel.Content>
          {Array.from({ length: 5 }).map((_, index) => {
            const seed = `sizes-${index}`
            const img = `https://picsum.photos/seed/${seed}/1200/800`
            return (
              <Carousel.Item key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <article className="rounded-lg overflow-hidden border-2 card-8bit">
                    <img src={img} alt={`Slide ${index + 1}`} className="w-full h-80 object-cover" />
                    <Card className="w-full">
                      <Card.Header>
                        <Card.Title style={{ fontFamily: 'var(--font-secondary)', color: '#00ffff' }}>Size {index + 1}</Card.Title>
                        <Card.Description style={{ color: '#cfefff' }}>Placeholder event / size card</Card.Description>
                      </Card.Header>
                      <Card.Content>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="text-sm text-muted" style={{ color: '#ffe9e9' }}>Details</div>
                          <div className="text-sm text-muted" style={{ color: '#7fffd4' }}>Join</div>
                        </div>
                      </Card.Content>
                    </Card>
                  </article>
                </div>
              </Carousel.Item>
            )
          })}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel>
    </div>
  )
}
