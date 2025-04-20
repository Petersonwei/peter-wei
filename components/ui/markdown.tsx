'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface MarkdownProps {
  content: string
  className?: string
}

export function Markdown({ content, className }: MarkdownProps) {
  const [htmlContent, setHtmlContent] = useState('')

  useEffect(() => {
    // Simple markdown to HTML converter
    const html = content
      // Convert headings
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Convert paragraphs
      .replace(/^\s*(\n)?(.+)/gim, function(m) {
        return /\<(\/)?(h1|h2|h3|ul|ol|li|blockquote|code|pre)/.test(m) ? m : '<p>' + m + '</p>';
      })
      // Convert bold
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      // Convert italic
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      // Convert links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // Convert code blocks
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      // Convert inline code
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Convert lists
      .replace(/^\s*\n\*/gim, '<ul>\n*')
      .replace(/^(\*.+)\s*\n([^\*])/gim, '$1\n</ul>\n\n$2')
      .replace(/^\*(.+)/gim, '<li>$1</li>')
      // Convert ordered lists
      .replace(/^\s*\n\d\./gim, '<ol>\n1.')
      .replace(/^(\d\..+)\s*\n([^\d\.])/gim, '$1\n</ol>\n\n$2')
      .replace(/^\d\.(.+)/gim, '<li>$1</li>')
      // Convert line breaks
      .replace(/\n$/gim, '<br />')
      // Fix extra spaces
      .replace(/<\/ul>\n<br \/>/g, '</ul>')
      .replace(/<\/ol>\n<br \/>/g, '</ol>')

    setHtmlContent(html)
  }, [content])

  return (
    <div 
      className={cn('prose dark:prose-invert max-w-none prose-img:rounded-lg', className)}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
} 