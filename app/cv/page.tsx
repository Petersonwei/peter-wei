'use client'

import Link from 'next/link'

export default function CVPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Peter Wei</h1>
        
        <p className="flex flex-wrap gap-2 items-center mb-4">
          <span>+61 452 509 198</span>
          <span>|</span>
          <span>pwei.dev@gmail.com</span>
          <span>|</span>
          <Link href="https://www.linkedin.com/in/peter-wei-it/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/peter-wei-it
          </Link>
          <span>|</span>
          <Link href="https://github.com/Petersonwei" target="_blank" rel="noopener noreferrer">
            github.com/Petersonwei
          </Link>
        </p>

        <p>
          Human-centred full-stack developer and Master of IT with <strong>2 years of experience</strong> designing scalable, data-driven systems across digital and cloud ecosystems. Proven expertise in software and systems development using Python, C#, React, Node.js, Java, SQL, and AI technologies. Passionate about leveraging automation, machine learning, and real-time analytics to advance digital innovation in intelligent operations and empower inclusive, future-focused solutions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Work Experience</h2>
        
        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Contract Software Engineer / UI Designer</h3>
            <p className="text-sm text-muted-foreground">Mar 2024 - Present</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://www.uq.edu.au/" target="_blank" rel="noopener noreferrer">
              The University of Queensland
            </Link>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Working in a <strong>4-person</strong> team to design and develop a tourism-focused gamification app using figma and React Native, actively communicating with multi-level stakeholders (manager, designer, researcher).</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Software Developer Intern</h3>
            <p className="text-sm text-muted-foreground">Dec 2024 - Present</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://www.linkedin.com/company/vexit/" target="_blank" rel="noopener noreferrer">
              Vexit IT Consulting
            </Link>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Built a CMS frontend with Next.js, React, Redux, and RTK, integrating scalable RESTful microservices.</li>
            <li>Improved system performance <strong>by 40%</strong> through .NET Core and PostgreSQL optimisation.</li>
            <li>Enhanced release efficiency <strong>by 30%</strong> with Azure DevOps CI/CD and Agile workflows.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Webmaster (Casual)</h3>
            <p className="text-sm text-muted-foreground">Mar 2024 - Present</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://brisbanerotary.org.au/" target="_blank" rel="noopener noreferrer">
              Rotary Club of Brisbane
            </Link>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Rebuilt website architecture using HTML, CSS, and Club Runner, increasing monthly users <strong>by 40%</strong>.</li>
            <li>Co-developed the Queensland District Conference site, improving digital visibility and accessibility.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Software Developer / Data Engineer Intern</h3>
            <p className="text-sm text-muted-foreground">Aug 2024 - Dec 2024</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://www.easy-skill.com/" target="_blank" rel="noopener noreferrer">
              Easy Skill Australia Pty Ltd
            </Link>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Automated ERP payroll workflows for <strong>1,500+</strong> projects using NestJS, Node.js, MongoDB, and CI/CD pipelines, speeding up deployments <strong>by 75%</strong>.</li>
            <li>Reduced hosting costs <strong>by 30%</strong> through infrastructure prototyping with AWS Amplify & Elastic Beanstalk.</li>
            <li>Mentored a new intern, reducing code review cycles <strong>by 25%</strong>, and collaborated across <strong>2+ teams</strong>.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Web Developer Intern</h3>
            <p className="text-sm text-muted-foreground">Mar 2024 - Aug 2024</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://axcharge.com.au/" target="_blank" rel="noopener noreferrer">
              AxCharge Australia Ltd. Pty
            </Link>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Diagnosed and resolved a major site outage, coordinating with <strong>4 providers</strong> to minimise downtime.</li>
            <li>Built responsive sites with Google Analytics, WordPress and JavaScript, boosting page views <strong>by 55%</strong>.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Business Analyst / System Analyst Intern</h3>
            <p className="text-sm text-muted-foreground">Dec 2023 - Feb 2024</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://spunfsic.com/en/eng-home/" target="_blank" rel="noopener noreferrer">
              Mascot New Technology Co.Ltd
            </Link>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Analysed factory workflows using Power BI, reducing defects by <strong>25%</strong> via process optimisation.</li>
            <li>Designed real-time dashboards, cutting reporting time by <strong>70%</strong> and enhancing decision-making.</li>
            <li>Led stakeholder workshops with engineers and management to align operations with <strong>ISO-compliant,</strong> data-driven solutions.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Project Experience</h2>
        
        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">E-Commerce Store Development Project</h3>
            <p className="text-sm text-muted-foreground">Jan 2025 - Present</p>
          </div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Built a secure e-commerce platform using .NET Core, React (RTK Query), and Stripe, supporting high concurrency.</li>
            <li>Improved query speed by <strong>20%</strong> with Entity Framework and MS SQL optimisation.</li>
            <li>Automated releases via Azure DevOps CI/CD, ensuring <strong>99.9%</strong> uptime and halving deployment time.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Clone Myself – Personal Voice Web Portfolio</h3>
            <p className="text-sm text-muted-foreground">Feb 2025 – Mar 2025</p>
          </div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Developed a full-stack AI voice assistant using LLM, Retell AI, and Next.js with real-time voice cloning.</li>
            <li>Reduced latency by <strong>30%</strong> through optimised API fetching and integration.</li>
            <li>Managed <strong>50+</strong> voice interactions via Firebase with improved accuracy and natural dialogue.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Big Data Startup Analytics Project</h3>
            <p className="text-sm text-muted-foreground">Oct 2024 – Dec 2024</p>
          </div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Processed <strong>100K+</strong> YCombinator records on <strong>GCP</strong> with Apache Spark to uncover startup success patterns.</li>
            <li>Built ML models (Logistic Regression, Random Forest, K-Means) with <strong>82% accuracy</strong> using Spark MLlib.</li>
            <li>Optimised data pipelines with Spark DataFrames and Parquet, reducing compute time <strong>by 40%</strong>.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Customer Loyalty Analytics Project</h3>
            <p className="text-sm text-muted-foreground">Aug 2023 – Oct 2023</p>
          </div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Led a <strong>5-person</strong> team analysing churn and CLV using R, Power BI, and clustering (K-Means).</li>
            <li>Developed a churn model (<strong>78% accuracy</strong>) and dashboards to guide retention strategies.</li>
            <li>Translated insights into <strong>3 actions</strong> that improved segmentation and stakeholder decision-making.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
        
        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Master of Information Technology</h3>
            <p className="text-sm text-muted-foreground">Jul 2023 - Jun 2025</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://www.uq.edu.au/" target="_blank" rel="noopener noreferrer">
              The University of Queensland
            </Link>
            , Distinction Average, Faculty Ambassador / Student Mentor / UX Researcher
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Thesis Research: Design and Evaluation of an AI Technology for Families (Supervisor: Dr. Dhaval Vyas)</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Industry Placement & Study Program</h3>
            <p className="text-sm text-muted-foreground">Jul 2022 - Jun 2023</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://www.unsw.edu.au/" target="_blank" rel="noopener noreferrer">
              University of New South Wales
            </Link>
          </p>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Bachelor of Business Administration</h3>
            <p className="text-sm text-muted-foreground">Jul 2019 - Jun 2023</p>
          </div>
          <p className="font-medium mb-2">
            Tunghai University, Valedictorian, Presidential Award
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Technical Skills</h2>
        
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Frontend:</strong> React, Next.js, TypeScript, JavaScript, Java, HTML5, CSS, Tailwind, Material UI, Angular</li>
          <li><strong>Backend:</strong> Node.js (Express, NestJS), .NET Core, C#, Django, Python, PHP</li>
          <li><strong>Data Engineering & BI:</strong> ETL/ELT, Data Warehousing (BigQuery, Azure Synapse), Power BI, Tableau</li>
          <li><strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, MS SQL, Firebase</li>
          <li><strong>Cloud & DevOps:</strong> AWS(EC2, S3, RDS, Lambda), Azure DevOps, Docker, GitHub Actions, AI/ML</li>
          <li><strong>Testing & Automation:</strong> Jest, Cypress, Selenium, CI/CD Pipelines</li>
          <li><strong>Tools:</strong> Agile, Scrum, Figma, Git, VS Code, WordPress, Jira, Protopie</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Extracurricular Experience</h2>
        
        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Co-Founder & Shopify Web Developer</h3>
            <p className="text-sm text-muted-foreground">Jul 2024 - Present</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://dribagcoffee.com.au/" target="_blank" rel="noopener noreferrer">
              DriBag Coffee
            </Link>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Launched DriBag, securing <strong>$10K+</strong> in sales, acquiring a corporate client, and <strong>gaining 37K+</strong> impressions.</li>
            <li>Built the Shopify store (CMS platform), optimised pre-orders, and drove sales at <strong>7+ events</strong>.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Startup Mentor</h3>
            <p className="text-sm text-muted-foreground">Feb 2025 - Present</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://ventures.uq.edu.au/" target="_blank" rel="noopener noreferrer">
              UQ Ventures
            </Link>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Mentored a cohort of <strong>80+</strong> students on idea validation, market fit, and early-stage development.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Secretary / Head of Operations</h3>
            <p className="text-sm text-muted-foreground">Jul 2024 - Present</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://australiacareerforum.com/" target="_blank" rel="noopener noreferrer">
              Australia Career Forum
            </Link>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Led operations for a <strong>100-committee, 25,000-member</strong> organisation, delivering <strong>20+</strong> national events.</li>
            <li>Automated workflows using Notion, Make.com, and Slack, reducing coordination time by <strong>25%</strong>.</li>
            <li>Managed internal governance and submitted formal constitution documents to the NSW Government, ensuring compliance and transparent record-keeping across <strong>5</strong> remote teams.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Young Tech Ambassador</h3>
            <p className="text-sm text-muted-foreground">Jan 2025 - Present</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://www.acs.org.au/" target="_blank" rel="noopener noreferrer">
              Australian Computer Society (ACS)
            </Link>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Inspire future tech leaders through <strong>4+</strong> public speaking and mentorship at high schools and IT events.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Data Analyst</h3>
            <p className="text-sm text-muted-foreground">Jun 2024 - Present</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://www.linkedin.com/company/projecttyra/about/" target="_blank" rel="noopener noreferrer">
              Project Tyra
            </Link>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Built <strong>4</strong> real-time dashboards using Python (Pandas, NumPy, Matplotlib), analysing <strong>6 years</strong> of historical data to enable real-time monitoring and data-driven decision-making.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Director of Social Media & IT</h3>
            <p className="text-sm text-muted-foreground">Jul 2023 - Sep 2024</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://uqu.com.au/clubs-and-societies/university-of-queensland-graduate-union-of-taiwanese-studentsuqguts" target="_blank" rel="noopener noreferrer">
              UQ GUTS (University of Queensland Graduate Union)
            </Link>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Grew membership by <strong>38%</strong> and boosted social media reach to <strong>50K+</strong> impressions across IG & Website.</li>
            <li>Improve operational efficiency, earning <strong>Postgrad Event of the Year</strong> and <strong>Club of the Year awards</strong>.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">IT Support</h3>
            <p className="text-sm text-muted-foreground">Dec 2023 - Jul 2024</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://computers4learning.org.au/" target="_blank" rel="noopener noreferrer">
              Computers 4 Learning
            </Link>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Repaired and QA-tested <strong>40+</strong> laptops, reinstalling OS with Linux for optimal performance.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Consultant Placement</h3>
            <p className="text-sm text-muted-foreground">Feb 2023 - Apr 2023</p>
          </div>
          <p className="font-medium mb-2">
            <Link href="https://www.linkedin.com/company/wildflower-landscapes/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              Wildflower
            </Link>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Collaborated with a 5-member team to conduct market analysis, interview 2 founders, and deliver a 20+ page strategic fundraising report supporting Wildflower growth objectives.</strong></li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-xl font-semibold mb-1">Industry Apprentice</h3>
            <p className="text-sm text-muted-foreground">Mar 2021 – Jun 2023</p>
          </div>
          <p className="font-medium mb-2">
            Enterprise Mentor Program
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Completed hands-on training in <strong>PMP, NPI, and Lean Six Sigma</strong>, focusing on project execution, quality, and process improvement. Gained exposure to <strong>FMEA, supply chain optimisation</strong>, and global sourcing.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Awards & Scholarships</h2>
        
        <ul className="list-disc pl-6">
          <li><strong>Student-Staff Partnership Scholar</strong>, Jul 2024</li>
          <li><strong>MOE Exchange & Internship Scholar</strong>, Jul 2023</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">References</h2>
        
        <p><strong>Pierre Bussy |</strong> Co-Founder, <Link href="https://www.easy-skill.com/" target="_blank" rel="noopener noreferrer">Easy Skill Australia Pty Ltd</Link> | <a href="mailto:pierre.bussy@easy-skill.com">pierre.bussy@easy-skill.com</a></p>
        
        <p><strong>Peng Tong |</strong> CEO, <Link href="https://axcharge.com.au/" target="_blank" rel="noopener noreferrer">AxCharge Ltd. Pty</Link> | <a href="mailto:richardt@axcharge.com.au">richardt@axcharge.com.au</a> | +61 418 676298</p>
      </article>
    </div>
  )
} 