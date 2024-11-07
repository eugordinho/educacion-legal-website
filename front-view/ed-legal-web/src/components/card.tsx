import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const cardData = [
  {
    id: 1,
    image: "/placeholder.svg?height=100&width=150",
    title: "Explore Nature",
    subtitle: "Discover outdoors"
  },
  {
    id: 2,
    image: "/placeholder.svg?height=100&width=150",
    title: "City Adventures",
    subtitle: "Urban excitement"
  },
  {
    id: 3,
    image: "/placeholder.svg?height=100&width=150",
    title: "Culinary Delights",
    subtitle: "World's flavors"
  },
  {
    id: 4,
    image: "/placeholder.svg?height=100&width=150",
    title: "Cultural Wonders",
    subtitle: "Diverse traditions"
  },
  {
    id: 5,
    image: "/placeholder.svg?height=100&width=150",
    title: "Beach Getaways",
    subtitle: "Coastal relaxation"
  }
]

export default function Component() {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold text-center mb-4">Featured Categories</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {cardData.map((card) => (
            <Card key={card.id} className="w-[200px] flex-shrink-0">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[100px] object-cover"
              />
              <CardHeader className="p-3">
                <CardTitle className="text-sm">{card.title}</CardTitle>
                <CardContent className="p-0">
                  <p className="text-xs text-muted-foreground">{card.subtitle}</p>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}