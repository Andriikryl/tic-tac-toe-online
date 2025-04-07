import Link from "next/link"

export function BottomLink({text, url, linkText} : {
    text: string,
    url: string,
    linkText: string
}) {
  return (
        <div className="text-center text-sm">
          <p>{text}</p>
          <Link
            href={url}
            className="font-medium text-primary hover:underline"
          >
            {linkText}
          </Link>
        </div>

  );
}
