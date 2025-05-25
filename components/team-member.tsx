import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

export default function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-white">{name}</CardTitle>
        <CardDescription className="text-blue-300">{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-400">{bio}</p>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 pt-0">
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
          <Github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Link>
      </CardFooter>
    </Card>
  )
}
