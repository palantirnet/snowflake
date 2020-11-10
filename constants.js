// @flow
import * as d3 from 'd3'

export type TrackId = 'HEADER_ONE' | 'HEADER_TWO' | 'HEADER_THREE' | 'HEADER_FOUR' |
  'PLANNING' | 'COMMUNICATION' | 'PROFESSIONALISM' |
  'INITIATIVE' | 'LEARNING' | 'MENTORSHIP' |
  'COMPLEXITY' | 'CLIENT_VALUE' | 'BIZDEV'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'HEADER_ONE': Milestone,
  'HEADER_TWO': Milestone,
  'HEADER_THREE': Milestone,
  'HEADER_FOUR': Milestone,
  'PLANNING': Milestone,
  'COMMUNICATION': Milestone,
  'PROFESSIONALISM': Milestone,
  'INITIATIVE': Milestone,
  'MENTORSHIP': Milestone,
  'LEARNING': Milestone,
  'COMPLEXITY': Milestone,
  'CLIENT_VALUE': Milestone,
  'BIZDEV': Milestone,
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneValues = (trackId: TrackId): string => {
  switch (trackId) {
      case 'HEADER_ONE':
      case 'HEADER_TWO':
      case 'HEADER_THREE':
      case 'HEADER_FOUR':
          return 'A'
      case "PLANNING":
      case "COMMUNICATION":
      case "PROFESSIONALISM":
          return 'B'
      default:
          return 'C'
  }
}

export const milestoneToPoints = (milestone: Milestone, trackId: TrackId, limitType: false): number => {
    if (milestoneValues(trackId) == 'A') {
      switch (milestone) {
          case 0: return 0
          case 1: return 4
          case 2: return 12
          case 3: return 24
          case 4: return 40
          case 5: return 60
          default: return 0
      }
    }
    if (limitType) {
        return 0
    }
    if (milestoneValues(trackId) == 'B') {
        switch (milestone) {
            case 0: return 0
            case 1: return 2
            case 2: return 6
            case 3: return 12
            case 4: return 20
            case 5: return 30
            default: return 0
        }
    }
    switch (milestone) {
      case 0: return 0
      case 1: return 1
      case 2: return 3
      case 3: return 6
      case 4: return 10
      case 5: return 15
      default: return 0
   }
}

export const pointsToLevels = {
  '0': '1',
  '10': '2',
  '20': '3',
  '40': '4',
  '60': '5',
  '80': '6',
  '100': '7',
  '130': '8',
  '160': '9',
  '190': '10',
  '230': '11',
  '270': '12',
  '300': '13',
  '330': '14',
  '360': '15',
}

export const maxLevel = 360

export const executionGate = {
  '30': '4',
  '73': '7',
  '133': '10',
  '195': '13',
}

export const skillsGate = {
  '10': '4',
  '27': '7',
  '57': '10',
  '105': '13',
}

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'HEADER_ONE': Track,
  'HEADER_TWO': Track,
  'HEADER_THREE': Track,
  'HEADER_FOUR': Track,
  'PLANNING': Track,
  'COMMUNICATION': Track,
  'PROFESSIONALISM': Track,
  'INITIATIVE': Track,
  'LEARNING': Track,
  'MENTORSHIP': Track,
  'COMPLEXITY': Track,
  'CLIENT_VALUE': Track,
  'BIZDEV': Track,
|}

export const tracks: Tracks = {
    "HEADER_ONE":{
        "milestone": "HEADER_ONE",
        "cohort": "DEFAULT",
        "category": "A",
        "displayName": "Default 1",
        "description": "Demonstrates proficiency in Palantir\u2019s UX Strategy practice",
        "milestones": [
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Strategy practice",
                "signals": [
                    "Is building proficiency in Palantir\u2019s UX Strategy practice"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Strategy practice",
                "signals": [
                    "Is building proficiency in Palantir\u2019s UX Strategy practice"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Strategy practice",
                "signals": [
                    "Is building proficiency in Palantir\u2019s UX Strategy practice"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Strategy practice",
                "signals": [
                    "Is building proficiency in Palantir\u2019s UX Strategy practice"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Strategy practice",
                "signals": [],
                "examples": []
            }
        ]
    },"HEADER_TWO":{
        "milestone": "HEADER_TWO",
        "cohort": "DEFAULT",
        "category": "A",
        "displayName": "Default 2",
        "description": "Explores goals, business models, users, user experience, information architecture, content structures, taxonomies, technology ecospheres, pain points, and aspirations",
        "milestones": [
            {
                "summary": "Explores goals, business models, users, user experience, information architecture, content structures, taxonomies, technology ecospheres, pain points, and aspirations",
                "signals": [
                    "Is developing an understanding of the connections between business goals, user interactions, content strategy, and information architecture"
                ],
                "examples": []
            },
            {
                "summary": "Explores goals, business models, users, user experience, information architecture, content structures, taxonomies, technology ecospheres, pain points, and aspirations",
                "signals": [
                    "Is developing an understanding of the connections between business goals, user interactions, content strategy, and information architecture"
                ],
                "examples": []
            },
            {
                "summary": "Explores goals, business models, users, user experience, information architecture, content structures, taxonomies, technology ecospheres, pain points, and aspirations",
                "signals": [
                    "Is developing an understanding of the connections between business goals, user interactions, content strategy, and information architecture"
                ],
                "examples": []
            },
            {
                "summary": "Explores goals, business models, users, user experience, information architecture, content structures, taxonomies, technology ecospheres, pain points, and aspirations",
                "signals": [
                    "Is developing an understanding of the connections between business goals, user interactions, content strategy, and information architecture"
                ],
                "examples": []
            },
            {
                "summary": "Explores goals, business models, users, user experience, information architecture, content structures, taxonomies, technology ecospheres, pain points, and aspirations",
                "signals": [],
                "examples": []
            }
        ]
    },"HEADER_THREE":{
        "milestone": "HEADER_THREE",
        "cohort": "DEFAULT",
        "category": "A",
        "displayName": "Default 3",
        "description": "Conducts user research and analyzes data and inputs gathered during discovery in order to inform recommendations",
        "milestones": [
            {
                "summary": "Conducts user research and analyzes data and inputs gathered during discovery in order to inform recommendations",
                "signals": [
                    "Understands the founding principles of UX design and usability"
                ],
                "examples": []
            },
            {
                "summary": "Conducts user research and analyzes data and inputs gathered during discovery in order to inform recommendations",
                "signals": [
                    "Understands the founding principles of UX design and usability"
                ],
                "examples": []
            },
            {
                "summary": "Conducts user research and analyzes data and inputs gathered during discovery in order to inform recommendations",
                "signals": [
                    "Understands the founding principles of UX design and usability"
                ],
                "examples": []
            },
            {
                "summary": "Conducts user research and analyzes data and inputs gathered during discovery in order to inform recommendations",
                "signals": [
                    "Understands the founding principles of UX design and usability"
                ],
                "examples": []
            },
            {
                "summary": "Conducts user research and analyzes data and inputs gathered during discovery in order to inform recommendations",
                "signals": [],
                "examples": []
            }
        ]
    },"HEADER_FOUR":{
        "milestone": "HEADER_FOUR",
        "cohort": "DEFAULT",
        "category": "A",
        "displayName": "Default 4",
        "description": "Recommends improvements for project strategies, user experience, and information architecture within the framework of the project goals and informed by user research",
        "milestones": [
            {
                "summary": "Recommends improvements for project strategies, user experience, and information architecture within the framework of the project goals and informed by user research",
                "signals": [
                    "Is becoming familiar with the technical strengths and constraints within our preferred technology solutions"
                ],
                "examples": []
            },
            {
                "summary": "Recommends improvements for project strategies, user experience, and information architecture within the framework of the project goals and informed by user research",
                "signals": [
                    "Is becoming familiar with the technical strengths and constraints within our preferred technology solutions"
                ],
                "examples": []
            },
            {
                "summary": "Recommends improvements for project strategies, user experience, and information architecture within the framework of the project goals and informed by user research",
                "signals": [
                    "Is becoming familiar with the technical strengths and constraints within our preferred technology solutions"
                ],
                "examples": []
            },
            {
                "summary": "Recommends improvements for project strategies, user experience, and information architecture within the framework of the project goals and informed by user research",
                "signals": [
                    "Is becoming familiar with the technical strengths and constraints within our preferred technology solutions"
                ],
                "examples": []
            },
            {
                "summary": "Recommends improvements for project strategies, user experience, and information architecture within the framework of the project goals and informed by user research",
                "signals": [],
                "examples": []
            }
        ]
    },"PLANNING":{
        "milestone": "PLANNING",
        "cohort": "DEFAULT",
        "category": "B",
        "displayName": "Planning and Coordination",
        "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, to deliver client value",
        "milestones": [
            {
                "summary": "Delivers well-scoped programs of work that meet their goals, on time, to budget, to deliver client value",
                "signals": [
                    "Is learning how to break down and accurately estimate their own work",
                    "Works with more experienced teammates to set project goals and break down larger projects into discrete tasks",
                    "Reaches out to others in a timely manner when in need of help",
                    "Commits to and completes their work within expected time frame, holding themselves accountable",
                    "Understands how their work fits within the broader scope and objectives of a project",
                    "Delivers consistently good outcomes within project scope, following quality standards"
                ],
                "examples": []
            },
            {
                "summary": "Delivers well-scoped programs of work that meet their goals, on time, to budget, to deliver client value",
                "signals": [
                    "Consistently and accurately estimates the amount of time a given task will take",
                    "Is becoming more proficient with their ability to break down tasks, plan and estimate their assigned work, and propose scope changes in order to deliver on time",
                    "Prioritizes tasks in alignment with project goals",
                    "Defines and hits interim milestones",
                    "Realizes when progress toward desired results is stalling and takes action to get things back on track",
                    "Researches and considers alternative approaches",
                    "Devotes time to find the most effective ways to meet commitments"
                ],
                "examples": []
            },
            {
                "summary": "Delivers well-scoped programs of work that meet their goals, on time, to budget, to deliver client value",
                "signals": [
                    "Integrates business needs into project planning",
                    "Can smoothly and successfully execute an initiative, set milestones for a team, and proactively ensure all core goals are achieved even if plans need to be changed to do so",
                    "Prioritizes the most important work for the company, team, and client",
                    "Delegates tasks to others appropriately",
                    "Adapts and changes direction quickly based on shifting company and project needs",
                    "When working on more than one or a portfolio of projects, is constantly aware of the bigger picture and what impact it has on planning work and managing one\u2019s time"
                ],
                "examples": []
            },
            {
                "summary": "Delivers well-scoped programs of work that meet their goals, on time, to budget, to deliver client value",
                "signals": [
                    "Successfully plans and executes projects involving multiple stakeholders and complex requirements, while prioritizing strategically",
                    "Leads teams of teams, and coordinates effective cross-functional collaboration",
                    "Manages dependencies on their other projects and team commitments",
                    "Helps define the vision for long-term projects and enable others to participate in their design and implementation",
                    "Is proactive in identifying and planning for needs both in the near- and long-term for Palantir and our clients",
                    "Provides clarity in order to prioritize the most important work for the project and the company",
                    "Leverages repeated project patterns of what\u2019s working and works to mitigate what's not",
                    "Works at all levels of the organization to positively impact the team and deliver client value",
                    "Improves team inclusivity"
                ],
                "examples": []
            },
            {
                "summary": "Delivers well-scoped programs of work that meet their goals, on time, to budget, to deliver client value",
                "signals": [
                    "Plans and executes large, complex projects with interdependencies across teams and systems",
                    "Considers constraints, opportunities, and business objectives when planning",
                    "Successfully supports and guides others to make plans for complex efforts that start out with unclear or competing goals",
                    "Supports teams in making difficult decisions when there are multiple paths\/options to take",
                    "Leads projects or initiatives that are critical to the future of Palantir"
                ],
                "examples": []
            }
        ]
    },"COMMUNICATION":{
        "milestone": "COMMUNICATION",
        "cohort": "DEFAULT",
        "category": "B",
        "displayName": "Communication and Co-Creation",
        "description": "Focuses on teamwork, communication skills, asking for and receiving feedback, collaboration, and documentation",
        "milestones": [
            {
                "summary": "Focuses on teamwork, communication skills, asking for and receiving feedback, collaboration, and documentation",
                "signals": [
                    "Communicates their work status clearly and effectively to internal team members and client stakeholders",
                    "Writes clear comments and documentation",
                    "Presents their work to the client with coaching",
                    "Is learning to work collaboratively on a self-organizing team and speak up in meetings",
                    "Proactively asks questions and reaches out for help to get unblocked",
                    "Voices concerns or need for clarification to their project teams and, if necessary, escalates concerns to discipline leaders or POD representatives",
                    "Is developing the ability to communicate complicated concepts simply and successfully to an audience unfamiliar with the subject matter",
                    "Accepts feedback graciously and learns from experience",
                    "Is learning about other disciplines at Palantir and how they deliver value to the team and to clients"
                ],
                "examples": []
            },
            {
                "summary": "Focuses on teamwork, communication skills, asking for and receiving feedback, collaboration, and documentation",
                "signals": [
                    "Communicates clearly at team and client-facing meetings (e.g., escalating blockers quickly, clarifying requirements, and sharing assumptions)",
                    "Adapts messages for a diverse audience, choosing appropriate tools and approaches for accurate and timely communication",
                    "Presents effectively to familiar audiences",
                    "Presents their work to the client without coaching",
                    "Takes initiative to lend their expertise as part of a self-organizing team"
                ],
                "examples": []
            },
            {
                "summary": "Focuses on teamwork, communication skills, asking for and receiving feedback, collaboration, and documentation",
                "signals": [
                    "Communicates issues, risks, and decisions clearly and proactively to a cross-functional audience, effectively managing conversations related to bad news or conflict",
                    "Builds cross-functional relationships with project team, chapter members, and clients",
                    "Seeks to understand other points of view",
                    "Engages in productive dialogue even when there are conflicting views, both inside and outside the team Mastering the ability to communicate complicated concepts simply and successfully to ensure understanding and appropriate action.",
                    "Presents effectively to audiences both familiar and unfamiliar",
                    "Makes room for others on self-organizing teams and knows when to lend their expertise",
                    "Communicates complicated concepts simply and successfully to an audience unfamiliar with the subject matter"
                ],
                "examples": []
            },
            {
                "summary": "Focuses on teamwork, communication skills, asking for and receiving feedback, collaboration, and documentation",
                "signals": [
                    "Communicates complex concepts and issues and easily makes compelling presentations to sophisticated audiences",
                    "Works effectively with key stakeholders to solve problems, identify paths forward, and\/or make critical project decisions",
                    "Deescalates conflicts and builds bridges between team members",
                    "Holds others and themselves accountable for their commitments and results",
                    "Spurs and facilitates meaningful discussion around complex issues",
                    "Offers insightful perspectives",
                    "Works towards consensus when making decisions, discerning what\u2019s best for the project, client, and team",
                    "Takes initiative to help outside of direct responsibilities",
                    "Knows when to \u201cstep up or step back\u201d on self-organizing teams"
                ],
                "examples": []
            },
            {
                "summary": "Focuses on teamwork, communication skills, asking for and receiving feedback, collaboration, and documentation",
                "signals": [
                    "Comfortably communicates and presents complex issues to diverse audiences inside and outside the company",
                    "Ensures productive communication among teams and stakeholders, including the right people at the right times",
                    "Proactively identifies and remedies communication gaps and issues",
                    "Is relied upon as one of the best communicators of complicated subjects, trade-offs, and difficult decisions",
                    "Clearly communicates company-level objectives and how they relate to experiments and initiatives"
                ],
                "examples": []
            }
        ]
    },"PROFESSIONALISM":{
        "milestone": "PROFESSIONALISM",
        "cohort": "DEFAULT",
        "category": "B",
        "displayName": "Professionalism",
        "description": "Exemplifies Palantir's values in order to create and collaborate in an open, diverse, and inclusive environment",
        "milestones": [
            {
                "summary": "Exemplifies Palantir's values in order to create and collaborate in an open, diverse, and inclusive environment",
                "signals": [
                    "Exhibits Palantir\u2019s core values of collaboration, bringing out the best in each other\u2014curiosity, thinking ahead, and accessibility",
                    "Brings their best self to work and makes space for others to do so as well",
                    "Treats clients and colleagues with respect",
                    "Takes responsibility for their own words and actions",
                    "Effectively deals with and understands opposing views and is open to learning from feedback",
                    "Objectively evaluates whether they\u2019ve met their goals",
                    "Is viewed as a trustworthy team member who keeps their commitments"
                ],
                "examples": []
            },
            {
                "summary": "Exemplifies Palantir's values in order to create and collaborate in an open, diverse, and inclusive environment",
                "signals": [
                    "Quickly integrates complicated information to identify strategies and solutions with the assistance of teammates and senior colleagues",
                    "Demonstrates keen insights into situations",
                    "Demonstrates a sense of agency",
                    "Accepts difficult tasks and gets right to work",
                    "Responds flexibly and strategically to ongoing change",
                    "Trusts teammates, assumes positive intent, and is able to disagree and commit",
                    "Is able to deliver their work despite inevitable distractions",
                    "Exhibits a growth mindset in regards to feedback"
                ],
                "examples": []
            },
            {
                "summary": "Exemplifies Palantir's values in order to create and collaborate in an open, diverse, and inclusive environment",
                "signals": [
                    "Is aware of their own strengths and weaknesses",
                    "Helps others identify the desired results of their assignments",
                    "Gives thoughtful feedback as a domain expert",
                    "Adopts a proactive approach instead of a reactive one",
                    "Demonstrates critical inquiry",
                    "Demonstrates humility and patience",
                    "Promotes exploration and experimentation as a response to uncertainty",
                    "Leads\/facilitates client presentations",
                    "Coaches others who need guidance presenting their work",
                    "Celebrates and shares success with the team"
                ],
                "examples": []
            },
            {
                "summary": "Exemplifies Palantir's values in order to create and collaborate in an open, diverse, and inclusive environment",
                "signals": [
                    "Moves through the change curve with positivity and intention",
                    "Creates space for everyone at Palantir to contribute, supporting growth of team members",
                    "Uses their position to raise difficult issues on behalf of others"
                ],
                "examples": []
            },
            {
                "summary": "Exemplifies Palantir's values in order to create and collaborate in an open, diverse, and inclusive environment",
                "signals": [
                    "Has a holistic vision of their role",
                    "Creates an organizational framework that facilitates a positive work environment",
                    "Helps others to move through the change curve, from resistors to adopters",
                    "Has energy and energizes those around them",
                    "Sets the tone and influences policies to further an open, diverse, and inclusive Palantir",
                    "Models professionalism and cultivates it in others"
                ],
                "examples": []
            }
        ]
    },"INITIATIVE":{
        "milestone": "INITIATIVE",
        "cohort": "DEFAULT",
        "category": "C",
        "displayName": "Initiative",
        "description": "Challenges the status quo and takes ownership and initiative outside of mandated work",
        "milestones": [
            {
                "summary": "Challenges the status quo and takes ownership and initiative outside of mandated work",
                "signals": [
                    "Is becoming comfortable owning small tasks, but proactively engages with more experienced teammates when tackling larger issues",
                    "Contributes their talent and expertise without prompting to achieve project results",
                    "Asks their team probing questions to understand other points of view"
                ],
                "examples": []
            },
            {
                "summary": "Challenges the status quo and takes ownership and initiative outside of mandated work",
                "signals": [
                    "Works efficiently and puts in the time and effort necessary to deliver great outcomes",
                    "Regularly leads smaller projects or tasks, but relies on more experienced teammates when working on major project investments",
                    "Seeks insights from others to help problem-solve project ambiguity",
                    "Proactively takes on executable tasks when blocked elsewhere",
                    "Proactively seeks help when blocked",
                    "Consistently delivers on reasonably well-defined projects"
                ],
                "examples": []
            },
            {
                "summary": "Challenges the status quo and takes ownership and initiative outside of mandated work",
                "signals": [
                    "Leads small and medium-sized projects",
                    "Takes ownership of tasks that nobody owns or wants",
                    "Seeks out others involved in a situation to learn their perspectives",
                    "Leaves things better than when they found them",
                    "Relied on to remove blockers for others",
                    "Demonstrates the ability to handle major tasks from definition through execution with consistently successful outcomes"
                ],
                "examples": []
            },
            {
                "summary": "Challenges the status quo and takes ownership and initiative outside of mandated work",
                "signals": [
                    "Takes on a leadership role of multiple, large projects or initiatives",
                    "Develops and tests new ways to solve systemic issues",
                    "Improves complicated organizational processes",
                    "Works with ambiguity and a growth mindset",
                    "Exemplifies grit and determination in the face of persistent obstacles",
                    "Is integral to major new company-wide initiatives",
                    "Seeks creative and innovative ways to improve and develop what they are doing",
                    "Effectively copes with change"
                ],
                "examples": []
            },
            {
                "summary": "Challenges the status quo and takes ownership and initiative outside of mandated work",
                "signals": [
                    "Champions and initiates new approaches and ideas to solve new classes of problems",
                    "Initiates major new company-wide initiatives",
                    "Galvanizes the entire company and garners buy-in for new strategies",
                    "Improves complex organizational processes",
                    "Defines policies for the company that encourage quality work and maximize client value",
                    "Identifies and eliminates single points of failure throughout the organization",
                    "Secures time and resources from executive leadership to deliver great quality"
                ],
                "examples": []
            }
        ]
    },"LEARNING":{
        "milestone": "LEARNING",
        "cohort": "DEFAULT",
        "category": "C",
        "displayName": "Learning and Career Development",
        "description": "Seeks opportunities to further their career and provides strategic support to others to help them build the careers they want",
        "milestones": [
            {
                "summary": "Seeks opportunities to further their career and provides strategic support to others to help them build the careers they want",
                "signals": [
                    "Shares their career and professional development interests and goals with their POD",
                    "Takes advantage of professional development opportunities",
                    "Shares opportunities for improvements and recognizes achievements for themselves and others",
                    "Shares learnings from previous projects with project teams",
                    "Collects and delivers feedback in a timely, constructive manner"
                ],
                "examples": []
            },
            {
                "summary": "Seeks opportunities to further their career and provides strategic support to others to help them build the careers they want",
                "signals": [
                    "Embraces big challenges as opportunities for growth and learning",
                    "Helps a group member have an appropriate role on the team",
                    "Understands and can communicate the value of the work done by each of their coworkers on the project",
                    "Pursues learning goals on project teams",
                    "Contributes to Palantir\u2019s sustainable and repeatable processes by sharing knowledge (e.g., through blog posts, contributing to Playbooks, etc.)",
                    "Works closely with others to help them learn new skills or continue to improve skills",
                    "Seeks feedback to improve and receives it well. Give timely, helpful feedback to peers"
                ],
                "examples": []
            },
            {
                "summary": "Seeks opportunities to further their career and provides strategic support to others to help them build the careers they want",
                "signals": [
                    "Advocates for aligning people with appropriate roles within organization",
                    "May participate in the hiring process, meeting with candidates and offering thoughts to the discipline\/hiring lead",
                    "Fosters a psychologically safe environment for dialogue and learning",
                    "Helps others achieve learning goals on project teams"
                ],
                "examples": []
            },
            {
                "summary": "Seeks opportunities to further their career and provides strategic support to others to help them build the careers they want",
                "signals": [
                    "Facilitates conversations that are aimed at co-creation",
                    "Is a POD representative successful at fulfilling those duties",
                    "Helps the team plan and implement discipline-related learning activities",
                    "Discusses career paths and helps create plans for others' professional growth",
                    "Advocates for aligning people with appropriate roles within organization",
                    "Elevates emerging leaders"
                ],
                "examples": []
            },
            {
                "summary": "Seeks opportunities to further their career and provides strategic support to others to help them build the careers they want",
                "signals": [
                    "Identifies leadership development opportunities for senior leadership",
                    "Pushes everyone to be as good as they can be, with empathy",
                    "Provides coaching to group leaders",
                    "Supports and develops senior leaders",
                    "Serves as an advisor to company leaders"
                ],
                "examples": []
            }
        ]
    },"MENTORSHIP":{
        "milestone": "MENTORSHIP",
        "cohort": "DEFAULT",
        "category": "C",
        "displayName": "Mentorship and Coaching",
        "description": "Provides support to others, spreads knowledge, and develops the team outside formal reporting structures",
        "milestones": [
            {
                "summary": "Provides support to others, spreads knowledge, and develops the team outside formal reporting structures",
                "signals": [
                    "Asks for support and advice",
                    "Open to giving and receiving feedback",
                    "Is reflective about their experiences",
                    "Comfortable sharing their opinions and experiences to further a project team\u2019s health",
                    "Acts as an onboarding buddy"
                ],
                "examples": []
            },
            {
                "summary": "Provides support to others, spreads knowledge, and develops the team outside formal reporting structures",
                "signals": [
                    "Takes time to understand and explain concepts and best practices",
                    "Helps others identify the desired results of their assignments",
                    "Makes themself available for informal support and advice",
                    "Provides sound advice when asked",
                    "Offers unprompted feedback to help growth, with empathy",
                    "Avoids siloing information when it can be usefully shared with others",
                    "Finds ways to ramp up and engage new team members",
                    "Creates space for people to talk through challenges",
                    "Acts as a positive role model"
                ],
                "examples": []
            },
            {
                "summary": "Provides support to others, spreads knowledge, and develops the team outside formal reporting structures",
                "signals": [
                    "Holds others accountable for their commitments, results, and successful outcomes",
                    "Asks questions to illuminate concepts, rather than stating them",
                    "Uses lessons learned to guide individuals and teams",
                    "Finds approaches that work best for a team member's personality",
                    "Brings resources, critical readings, opportunities, or experiences to the attention of others",
                    "Acts as a sounding board for peers and more junior team members",
                    "Provides help on how to have difficult conversations",
                    "Knows the difference between mentoring and coaching",
                    "Gives feedback that describes the situation, behavior, and impact (SBI model)",
                    "Asks powerful, open-ended questions to help other problem solve and envision future states"
                ],
                "examples": []
            },
            {
                "summary": "Provides support to others, spreads knowledge, and develops the team outside formal reporting structures",
                "signals": [
                    "Identifies gaps in team learning\/knowledge and finds ways to bridge those gaps",
                    "Models positive mentoring and teaching behaviors",
                    "Provides discipline\/cohort support and\/or facilitation",
                    "Exhibits enthusiasm for sharing their knowledge and expertise",
                    "Helps individuals find new and challenging opportunities within the organization",
                    "Helps individuals maintain resilience in periods of change",
                    "Shares knowledge and expertise with the team through formal mentoring and coaching"
                ],
                "examples": []
            },
            {
                "summary": "Provides support to others, spreads knowledge, and develops the team outside formal reporting structures",
                "signals": [
                    "Helps others maximize their potential through mentorship and coaching",
                    "Empowers team members to develop themselves",
                    "Leads others through change, providing scaffolding to empower and support others",
                    "Models productive and healthy mentor relationships",
                    "Seeks out experiments and innovative learning practices that are beneficial to and to Palantir",
                    "Helps individuals to move out of their comfort zone and try new things",
                    "Is a sought after coach and mentor"
                ],
                "examples": []
            }
        ]
    },"COMPLEXITY":{
        "milestone": "COMPLEXITY",
        "cohort": "DEFAULT",
        "category": "D",
        "displayName": "Navigating Complexity",
        "description": "Able to function and adapt behaviors in Cynefin complexity domains to deliver client value",
        "milestones": [
            {
                "summary": "Able to function and adapt behaviors in Cynefin complexity domains to deliver client value",
                "signals": [
                    "Understands the difference between complexity domains (i.e. obvious, complicated, complex, chaos, disorder)",
                    "Operates successfully in obvious domain with little or no supervision",
                    "Is gaining an understanding of and experience with best practices (the complicated domain)",
                    "Once made aware, adjusts approach to meet client needs in a changing system"
                ],
                "examples": []
            },
            {
                "summary": "Able to function and adapt behaviors in Cynefin complexity domains to deliver client value",
                "signals": [
                    "Knows in which complexity domain (obvious, complicated, complex, chaos, disorder) they are working",
                    "Operates successfully in complicated domain with little or no supervision",
                    "Identifies and deals with complicated situations to provide the best possible solutions",
                    "Applies best practices to the situation at hand (the complicated domain)",
                    "Adjusts approach to meet client needs in a changing system between the obvious and complicated domains",
                    "Recognizes when in the complex, chaotic or disorderly domains and brings it to the attention of project leaders to seek their assistance"
                ],
                "examples": []
            },
            {
                "summary": "Able to function and adapt behaviors in Cynefin complexity domains to deliver client value",
                "signals": [
                    "Guides others to understand in which complexity domain (obvious, complicated, complex, chaos, disorder) they are working",
                    "Operates successfully in complex domain with little or no supervision",
                    "Identifies \u201cknown unknowns\u201d",
                    "Adapts best practices when called for in the complicated domain",
                    "Able to adjust approach to meet client needs in a changing system between the complicated and complex domains",
                    "Recognizes when in the complex domain and able to make recommendations to the internal and client teams",
                    "When in a leadership role on a project, does not micromanage other team members and is able to guide them through solutions to issues that arise in the obvious, complicated, and complex domains"
                ],
                "examples": []
            },
            {
                "summary": "Able to function and adapt behaviors in Cynefin complexity domains to deliver client value",
                "signals": [
                    "Investigates issues as they arise in order to respond appropriately",
                    "In the complicated domain, chooses between multiple \u201cright\u201d answers to the problem at hand and provide rationale for the decision(s)",
                    "Has a reservoir of experiences in complicated and complex situations from which to draw when answers are not clear",
                    "Coaches others to find creative solutions to complex problems",
                    "High tolerance for risk",
                    "Holds and shares relevant industry leading practices",
                    "Understands and shares institutional knowledge",
                    "Seeks to cultivate innovation in the face of uncertainty, both internally and externally",
                    "Offers new perspectives to overcome complexity constraints",
                    "Selects systems thinking approaches to fit with the level of complexity and the nature of the environment",
                    "When faced with uncertainty, uses an inclusive leadership approach and does not revert to traditional command and control methods"
                ],
                "examples": []
            },
            {
                "summary": "Able to function and adapt behaviors in Cynefin complexity domains to deliver client value",
                "signals": [
                    "Makes sense of complex data and inputs",
                    "Guides others in the complex domain to choose between multiple \u201cright\u201d answers to the problem at hand and provide rationale for the decision(s)",
                    "Builds the capacity in others to cope with complexity and chaos",
                    "Functions at a high level when faced with \u201cunknown unknowns\u201d",
                    "Sought after resource and expert in complex situations when answers are not clear",
                    "When faced with chaos, realizes their management style needs to change and is able to make difficult decisions with little information"
                ],
                "examples": []
            }
        ]
    },"CLIENT_VALUE":{
        "milestone": "CLIENT_VALUE",
        "cohort": "DEFAULT",
        "category": "D",
        "displayName": "Client Value",
        "description": "Delivers consistent value for the client at every step of a project",
        "milestones": [
            {
                "summary": "Delivers consistent value for the client at every step of a project",
                "signals": [
                    "Understands the difference between Palantir service lines",
                    "Ensures that they are meeting team expectations on ticketed work",
                    "When they see an issue that would impede delivering client value, they raise the issue to project leadership",
                    "Offers solutions to project leadership when issues arise",
                    "Asks focused, relevant questions of the client and the team",
                    "Demonstrates active listening skills"
                ],
                "examples": []
            },
            {
                "summary": "Delivers consistent value for the client at every step of a project",
                "signals": [
                    "Is aware of the three types of consulting (i.e. Expert, Collaborative, Pair of Hands) and knows in which one they are operating",
                    "Helps others identify solutions to client issues that arise",
                    "Able to articulate the \u201cwhy\u201d or rationale behind each ticket\/task on which they are working",
                    "Understands the project\u2019s KPIs (Key Performance Indicators) and works towards implementing solutions in support of them",
                    "Contributes questions to the discovery process that reveal espoused v. actual need",
                    "Leverages learnings from previous projects to benefit the team and the client",
                    "Presents their own work",
                    "Understands their communication style and is aware of the styles of others"
                ],
                "examples": []
            },
            {
                "summary": "Delivers consistent value for the client at every step of a project",
                "signals": [
                    "Guides a portion of and\/or designs and leads the discovery process",
                    "Guides the client throughout the project to ensure work product is geared towards solving their unique problems",
                    "Contributes KPIs and\/or goals for the project based on data gleaned during the discovery phase",
                    "Anticipates unusual issues and problems, taking steps to minimize impact on outcomes",
                    "Through conversation and high-quality work, builds trust with the client in a sincere and authentic manner",
                    "Is viewed as a reliable resource to the client in their area of expertise",
                    "Guides others to make successful client presentations",
                    "Is self-aware and is able to adapt their communication style to meet the needs of the client"
                ],
                "examples": []
            },
            {
                "summary": "Delivers consistent value for the client at every step of a project",
                "signals": [
                    "Defines the client\u2019s unique business problem",
                    "Is viewed by the client as an expert in their cohort\/area of expertise",
                    "Sets up other team members for success on the project helping them get their expertise used to deliver value",
                    "Coaches the client to be self-sufficient when appropriate",
                    "Has successful, difficult conversations with the client that amicably resolve the issue in a way that benefits Palantir and the client"
                ],
                "examples": []
            },
            {
                "summary": "Delivers consistent value for the client at every step of a project",
                "signals": [
                    "Coaches those designing and leading the discovery process",
                    "Coaches those defining the client\u2019s unique business problem and guiding client in solving it",
                    "Seeks out situations that are complex and guides others to find innovative solutions",
                    "Guides others to have successful, difficult conversations with the client",
                    "Bases authority on experience, knowledge and relationship building, not position in the company"
                ],
                "examples": []
            }
        ]
    },"BIZDEV":{
        "milestone": "BIZDEV",
        "cohort": "DEFAULT",
        "category": "D",
        "displayName": "New Business Development",
        "description": "Contributes to new business development by delivering value on projects and participating in Palantir sales and marketing efforts",
        "milestones": [
            {
                "summary": "Contributes to new business development by delivering value on projects and participating in Palantir sales and marketing efforts",
                "signals": [
                    "Completes their work on time and within scope",
                    "Draws attention to blockers so that the team can help resolve or mitigate them",
                    "Understands the difference between a consultancy and an agency and approaches work with the mindset of a consultant",
                    "Is trusted by team members to deliver high quality work on time and on budget"
                ],
                "examples": []
            },
            {
                "summary": "Contributes to new business development by delivering value on projects and participating in Palantir sales and marketing efforts",
                "signals": [
                    "Identifies opportunities for project growth and alerts project leadership",
                    "Understands the SOW (Statement of Work) and how their role and expertise fits in the project",
                    "Articulates their own reasons for how Palantir differs from the competition",
                    "Writes blog posts"
                ],
                "examples": []
            },
            {
                "summary": "Contributes to new business development by delivering value on projects and participating in Palantir sales and marketing efforts",
                "signals": [
                    "Writes proposals for project extensions",
                    "Lends expertise to develop sales and marketing tools (e.g., validate and shape proposals, support ot P.net, development of pitch decks, proposals, etc.)",
                    "Participates in new business pitch meetings",
                    "Attends conferences on behalf of Palantir and participates in speaking to current and prospective clients"
                ],
                "examples": []
            },
            {
                "summary": "Contributes to new business development by delivering value on projects and participating in Palantir sales and marketing efforts",
                "signals": [
                    "Is in a leadership role on projects",
                    "Writes case studies",
                    "Writes large estimates and\/or proposals; determines a project\u2019s size and shape",
                    "Speaks at events where current and potential clients are in attendance",
                    "Participates in \/ leads efforts to transition clients between service lines",
                    "Identifies opportunities to pursue new types of projects\/work",
                    "Plays a significant\/leadership role in landing new business",
                    "Fosters ongoing relationships with clients"
                ],
                "examples": []
            },
            {
                "summary": "Contributes to new business development by delivering value on projects and participating in Palantir sales and marketing efforts",
                "signals": [
                    "Works with the sales team to co-create strategic approach to pitches",
                    "Conceives of new products and\/or service lines",
                    "Develops brand and marketing strategy for Palantir",
                    "Negotiates contracting terms",
                    "Acts as an expert resource to the estimating team"
                ],
                "examples": []
            }
        ]
    },

}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone, trackId))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId], trackId))
    .reduce((sum, addend) => (sum + addend), 0)

export const executingPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
    trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId], trackId, true))
        .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#11a9a1', '#FFC59E', '#FF944D', '#fb6500'])

export const cohorts = [
  {key: 'MANAGEMENT', label: 'Management'},
  {key: 'ENGINEERING', label: 'Engineering'},
  {key: 'FRONTEND', label: 'Front-End Development'},
  {key: 'PM', label: 'Project Management'},
  {key: 'DESIGN', label: 'User Experience Design'},
  {key: 'STRATEGY', label: 'User Experience Strategy'},
]
/* Get the title data */
export const titles = [
    {
        "label": "Engineer I",
        "minPoints": "0",
        "maxPoints": "19",
        "cohort": "Engineering"
    },
    {
        "label": "Engineer II",
        "minPoints": "20",
        "maxPoints": "39",
        "cohort": "Engineering"
    },
    {
        "label": "Engineer III",
        "minPoints": "40",
        "maxPoints": "59",
        "cohort": "Engineering"
    },
    {
        "label": "Engineer IV",
        "minPoints": "60",
        "maxPoints": "79",
        "cohort": "Engineering"
    },
    {
        "label": "Engineer V",
        "minPoints": "80",
        "maxPoints": "109",
        "cohort": "Engineering"
    },
    {
        "label": "Sr. Engineer I",
        "minPoints": "110",
        "maxPoints": "139",
        "cohort": "Engineering"
    },
    {
        "label": "Sr. Engineer II",
        "minPoints": "140",
        "maxPoints": "179",
        "cohort": "Engineering"
    },
    {
        "label": "Technical Architect I",
        "minPoints": "180",
        "maxPoints": "219",
        "cohort": "Engineering"
    },
    {
        "label": "Technical Architect II",
        "minPoints": "220",
        "maxPoints": "269",
        "cohort": "Engineering"
    },
    {
        "label": "Sr. Technical Architect I",
        "minPoints": "270",
        "maxPoints": "319",
        "cohort": "Engineering"
    },
    {
        "label": "Sr. Technical Architect II",
        "minPoints": "320",
        "maxPoints": "369",
        "cohort": "Engineering"
    },
    {
        "label": "Sr. Technical Architect III",
        "minPoints": "370",
        "maxPoints": "400",
        "cohort": "Engineering"
    },
    {
        "label": "Front-End Developer, I",
        "minPoints": "0",
        "maxPoints": "19",
        "cohort": "Front-end Development"
    },
    {
        "label": "Front-End Developer, II",
        "minPoints": "20",
        "maxPoints": "39",
        "cohort": "Front-end Development"
    },
    {
        "label": "Front-End Developer, III",
        "minPoints": "40",
        "maxPoints": "59",
        "cohort": "Front-end Development"
    },
    {
        "label": "Front-End Developer, IV",
        "minPoints": "60",
        "maxPoints": "79",
        "cohort": "Front-end Development"
    },
    {
        "label": "Front-End Developer, V",
        "minPoints": "80",
        "maxPoints": "109",
        "cohort": "Front-end Development"
    },
    {
        "label": "Sr. Front-End Developer, I",
        "minPoints": "110",
        "maxPoints": "139",
        "cohort": "Front-end Development"
    },
    {
        "label": "Sr. Front-End Developer, II",
        "minPoints": "140",
        "maxPoints": "179",
        "cohort": "Front-end Development"
    },
    {
        "label": "Technical Architect I",
        "minPoints": "180",
        "maxPoints": "219",
        "cohort": "Front-end Development"
    },
    {
        "label": "Technical Architect II",
        "minPoints": "220",
        "maxPoints": "269",
        "cohort": "Front-end Development"
    },
    {
        "label": "Sr. Technical Architect I",
        "minPoints": "270",
        "maxPoints": "319",
        "cohort": "Front-end Development"
    },
    {
        "label": "Sr. Technical Architect II",
        "minPoints": "320",
        "maxPoints": "369",
        "cohort": "Front-end Development"
    },
    {
        "label": "Sr. Technical Architect III",
        "minPoints": "370",
        "maxPoints": "400",
        "cohort": "Front-end Development"
    },
    {
        "label": "Web Strategist, I",
        "minPoints": "0",
        "maxPoints": "19",
        "cohort": "User Experience Design"
    },
    {
        "label": "Web Strategist, II",
        "minPoints": "20",
        "maxPoints": "39",
        "cohort": "User Experience Design"
    },
    {
        "label": "Web Strategist, III",
        "minPoints": "40",
        "maxPoints": "59",
        "cohort": "User Experience Design"
    },
    {
        "label": "Web Strategist, IV",
        "minPoints": "60",
        "maxPoints": "79",
        "cohort": "User Experience Design"
    },
    {
        "label": "Web Strategist, V",
        "minPoints": "80",
        "maxPoints": "109",
        "cohort": "User Experience Design"
    },
    {
        "label": "Sr. Strategist, I",
        "minPoints": "110",
        "maxPoints": "139",
        "cohort": "User Experience Design"
    },
    {
        "label": "Sr. Strategist II",
        "minPoints": "140",
        "maxPoints": "179",
        "cohort": "User Experience Design"
    },
    {
        "label": "DESIGN Architect, I",
        "minPoints": "180",
        "maxPoints": "219",
        "cohort": "User Experience Design"
    },
    {
        "label": "DESIGN Architect, II",
        "minPoints": "220",
        "maxPoints": "269",
        "cohort": "User Experience Design"
    },
    {
        "label": "Sr. DESIGN Architect, I",
        "minPoints": "270",
        "maxPoints": "319",
        "cohort": "User Experience Design"
    },
    {
        "label": "Sr. DESIGN Architect, II",
        "minPoints": "320",
        "maxPoints": "369",
        "cohort": "User Experience Design"
    },
    {
        "label": "Sr. DESIGN Architect, III",
        "minPoints": "370",
        "maxPoints": "400",
        "cohort": "User Experience Design"
    },
    {
        "label": "Designer, I",
        "minPoints": "0",
        "maxPoints": "19",
        "cohort": "User Interface Design"
    },
    {
        "label": "Designer, II",
        "minPoints": "20",
        "maxPoints": "39",
        "cohort": "User Interface Design"
    },
    {
        "label": "Designer, III",
        "minPoints": "40",
        "maxPoints": "59",
        "cohort": "User Interface Design"
    },
    {
        "label": "Designer, IV",
        "minPoints": "60",
        "maxPoints": "79",
        "cohort": "User Interface Design"
    },
    {
        "label": "Designer, V",
        "minPoints": "80",
        "maxPoints": "109",
        "cohort": "User Interface Design"
    },
    {
        "label": "Sr. Designer, I",
        "minPoints": "110",
        "maxPoints": "139",
        "cohort": "User Interface Design"
    },
    {
        "label": "Sr. Designer, II",
        "minPoints": "140",
        "maxPoints": "179",
        "cohort": "User Interface Design"
    },
    {
        "label": "DESIGN Architect, I",
        "minPoints": "180",
        "maxPoints": "219",
        "cohort": "User Interface Design"
    },
    {
        "label": "DESIGN Architect, II",
        "minPoints": "220",
        "maxPoints": "269",
        "cohort": "User Interface Design"
    },
    {
        "label": "Sr. DESIGN Architect, I",
        "minPoints": "270",
        "maxPoints": "319",
        "cohort": "User Interface Design"
    },
    {
        "label": "Sr. DESIGN Architect, II",
        "minPoints": "320",
        "maxPoints": "369",
        "cohort": "User Interface Design"
    },
    {
        "label": "Sr. DESIGN Architect, III",
        "minPoints": "370",
        "maxPoints": "400",
        "cohort": "User Interface Design"
    },
    {
        "label": "Project Manager, I",
        "minPoints": "0",
        "maxPoints": "19",
        "cohort": "Project Management"
    },
    {
        "label": "Project Manager, II",
        "minPoints": "20",
        "maxPoints": "39",
        "cohort": "Project Management"
    },
    {
        "label": "Project Manager, III",
        "minPoints": "40",
        "maxPoints": "59",
        "cohort": "Project Management"
    },
    {
        "label": "Project Manager, IV",
        "minPoints": "60",
        "maxPoints": "79",
        "cohort": "Project Management"
    },
    {
        "label": "Project Manager, V",
        "minPoints": "80",
        "maxPoints": "109",
        "cohort": "Project Management"
    },
    {
        "label": "Sr. Project Manager, I",
        "minPoints": "110",
        "maxPoints": "139",
        "cohort": "Project Management"
    },
    {
        "label": "Sr. Project Manager, II",
        "minPoints": "140",
        "maxPoints": "179",
        "cohort": "Project Management"
    },
    {
        "label": "Sr. Project Manager, III",
        "minPoints": "180",
        "maxPoints": "219",
        "cohort": "Project Management"
    },
    {
        "label": "Program Mgr, I",
        "minPoints": "220",
        "maxPoints": "269",
        "cohort": "Project Management"
    },
    {
        "label": "Program Mgr, II",
        "minPoints": "270",
        "maxPoints": "319",
        "cohort": "Project Management"
    },
    {
        "label": "Program Mgr, III",
        "minPoints": "320",
        "maxPoints": "369",
        "cohort": "Project Management"
    },
    {
        "label": "Sr. Program Mgr, I",
        "minPoints": "370",
        "maxPoints": "400",
        "cohort": "Project Management"
    },
    {
        "label": "Specialist, I",
        "minPoints": "0",
        "maxPoints": "19",
        "cohort": "Management"
    },
    {
        "label": "Specialist, II",
        "minPoints": "20",
        "maxPoints": "39",
        "cohort": "Management"
    },
    {
        "label": "Specialist, III",
        "minPoints": "40",
        "maxPoints": "59",
        "cohort": "Management"
    },
    {
        "label": "Specialist, IV",
        "minPoints": "60",
        "maxPoints": "79",
        "cohort": "Management"
    },
    {
        "label": "Manager, I",
        "minPoints": "80",
        "maxPoints": "109",
        "cohort": "Management"
    },
    {
        "label": "Manager, II",
        "minPoints": "110",
        "maxPoints": "139",
        "cohort": "Management"
    },
    {
        "label": "Manager, III",
        "minPoints": "140",
        "maxPoints": "179",
        "cohort": "Management"
    },
    {
        "label": "Manager, IV",
        "minPoints": "180",
        "maxPoints": "219",
        "cohort": "Management"
    },
    {
        "label": "Sr. Manager, I",
        "minPoints": "220",
        "maxPoints": "269",
        "cohort": "Management"
    },
    {
        "label": "Sr. Manager, II",
        "minPoints": "270",
        "maxPoints": "319",
        "cohort": "Management"
    },
    {
        "label": "Director, I",
        "minPoints": "320",
        "maxPoints": "369",
        "cohort": "Management"
    },
    {
        "label": "Director, II",
        "minPoints": "370",
        "maxPoints": "400",
        "cohort": "Management"
    }
]

export const eligibleTitles = (milestoneMap: MilestoneMap, cohort: string): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)
  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints-50 <= title.maxPoints)
                             && (title.cohort === cohort))
    .map(title => title.label)
}

export const trackMap = (trackList: object[], cohort: string): object[] => {
  switch (cohort) {
    case 'Management':
      return defaultTracks(trackList)
    case 'Engineering':
      return engineeringTracks(trackList)
    case 'Front-End Development':
      return frontendTracks(trackList)
    case 'User Experience Strategy':
      return designTracks(trackList)
    case 'User Experience Design':
      return strategyTracks(trackList)
    case 'Project Management':
      return pmTracks(trackList)

    default:
      return defaultTracks(trackList)
  }
  return trackList
}

export const defaultTracks = (trackList: object[]): object[] => {
  trackList["HEADER_ONE"] = {
      "milestone": "HEADER_ONE",
      "cohort": "MANAGEMENT",
      "category": "A",
      "displayName": "Servant Leadership",
      "description": "Comprehends the capacity to engage with stakeholders both internally and externally, and to develop strong interpersonal relationships with teams and clients to unlock their potential",
      "milestones": [
          {
              "summary": "Helps individuals to get unblocked creating a supporting and engaging environment",
              "signals": [
                  "Demonstrates an understanding of individuals' roles, goals, and interests",
                  "Demonstrates concern for the well-being of people",
                  "Actively listens",
                  "Treats people with respect"
              ],
              "examples": []
          },
          {
              "summary": "Manages expectations across teams and focuses on building long-term relationships",
              "signals": [
                  "Uses an understanding of the organization's processes, systems and policies to engage with colleagues",
                  "Assumes positive intent of others, approaching every interaction with kindness and good humor",
                  "Empathetically listens",
                  "Communicates difficult or negative messages in an honest, accurate, and respectful manner"
              ],
              "examples": []
          },
          {
              "summary": "Manages expectations supporting individuals and clients to perform at their highest capabilities",
              "signals": [
                  "Helps people develop and perform as highly as possible",
                  "Uses awareness and understanding of the organization's culture to implement change initiatives",
                  "Is able to deeply understand and empathize with others",
                  "Delivers persuasive and compelling messages"
              ],
              "examples": []
          },
          {
              "summary": "Advocates for people's needs, interests and goals and proactively works to support and enhance growth",
              "signals": [
                  "Always looks to enhance the development of their team members in ways that unlock potential, creativity and sense of purpose",
                  "Uses an understanding of the organization's culture and environment to develop and implement strategic plans, implement needed changes, and resolve talent needs and issues",
                  "Informs a person affected by a decision about what is happening, ensuring that the group has all of the necessary information",
                  "Provides visible leadership that \"walks the talk.\"  Sets high performance standards for self, acting as a role model for the team"
              ],
              "examples": []
          },
          {
              "summary": "Leads, inspires and servers others, enabling people to achieve their goals and full potential",
              "signals": [
                  "Focus on bringing their best self to your work, and making space for others to do so as well",
                  "Uses an understanding of complex relationships among organizational leaders to facilitate the strategy, implementation and maintenance of initiatives proposed by other executives",
                  "Uses storytelling to create a positive and engaging environment for teams and clients",
                  "Leverages relationships to best support and develop individuals"
              ],
              "examples": []
          }
      ]
  }
  trackList["HEADER_TWO"] = {
      "milestone": "HEADER_TWO",
      "cohort": "MANAGEMENT",
      "category": "A",
      "displayName": "Coaching",
      "description": "Helps people to develop their own independent thinking, guiding them through processes and facilitating learning",
      "milestones": [
          {
              "summary": "Helps individuals to think through the likely impacts of alternative decisions",
              "signals": [
                  "Helps individuals to think for themselves about possible impacts and solutions to a problem by asking open ended questions",
                  "Demonstrates a positive outlook on things"
              ],
              "examples": []
          },
          {
              "summary": "Helps individuals to act or perform in the face of challenging goals",
              "signals": [
                  "Shows confidence in other's ability and willingness to face challenges and solve problems",
                  "Helps people to gain awareness of current situations",
                  "Demonstrates curiosity"
              ],
              "examples": []
          },
          {
              "summary": "Coaches people proactively, and guides people to realizations rather than providing the answer\t",
              "signals": [
                  "Demonstrates the ability to understand what issues exist that limit individual's ability to perform the task or accomplish the objectives",
                  "Determines whether people need help to remove barriers or if they are able to tackle challenges by themselves"
              ],
              "examples": []
          },
          {
              "summary": "Coaches and guides all level of individuals to develop and enhance on-the-job performance, knowledge or behavior",
              "signals": [
                  "Partners with people to define actions based on their own abilities and knowledge",
                  "Supports people's progress, celebrates their wins and encourages them to find new paths if their original plan of action does not work out as expected",
                  "Demonstrates the ability to encourage meaningful thoughts that can help the other person address a challenge or break through to a new level of performance"
              ],
              "examples": []
          },
          {
              "summary": "Empowers and engages with others to help them improve their performance and overcome challenges to thrive at an optimal level based on their own abilities, skills, and knowledge",
              "signals": [
                  "Focuses on empowering their team members to discover solutions for themselves",
                  "Coaches senior leaders on creating positive working relationships with their teams and clients"
              ],
              "examples": []
          }
      ]
  }
  trackList["HEADER_THREE"] = {
      "milestone": "HEADER_THREE",
      "cohort": "MANAGEMENT",
      "category": "A",
      "displayName": "Facilitation",
      "description": "Comprehends the ability to lead people through processes towards agreed-upon objectives in a manner that encourages participation, ownership, and creativity",
      "milestones": [
          {
              "summary": "Helps individuals resolve difficult issues, promoting an inclusive environment",
              "signals": [
                  "Actively seeks views from a range of colleagues to help gain understanding",
                  "Contributes to creating an inclusive environment"
              ],
              "examples": []
          },
          {
              "summary": "Helps people collectively move through a process",
              "signals": [
                  "Is becoming comfortable in mediating escalated conflicts",
                  "Builds consensus among people and teams"
              ],
              "examples": []
          },
          {
              "summary": "Mediates escalated situations, empowers people, and resolves conflict\t",
              "signals": [
                  "Understands what drives and motivates the project team, and their capabilities and is aware of differences",
                  "Resolves and\/or mediates conflicts in a respectful, appropriate and impartial manner",
                  "Takes time to understand how individuals and teams are performing and working together to deliver the project outcomes"
              ],
              "examples": []
          },
          {
              "summary": "Guides and manages individuals both internally and externally to ensure that the their objectives are met effectively, with clear thinking, good participation, and full buy-in from everyone who is involved",
              "signals": [
                  "Understands themselves and the individuals in the project team, what drives and motivates them personally, and their individual capabilities",
                  "Is able to facilitate difficult interactions among stakeholders to achieve outcomes",
                  "Is focused on the big picture"
              ],
              "examples": []
          },
          {
              "summary": "Leads people through processes towards agreed-upon objectives in a manner that encourages participation, ownership, and creativity",
              "signals": [
                  "Uses their understanding of individuals and teams to make the project strategy tangible to individuals and teams",
                  "Serves as a positive role model for productive conflict",
                  "Encourages productive and respectful task-related conflict, using it to facilitate change",
                  "Resolves complex organizational dysfunction, or persistent conflict at senior levels\t"
              ],
              "examples": []
          }
      ]
  }
  trackList["HEADER_FOUR"] = {
      "milestone": "HEADER_FOUR",
      "cohort": "MANAGEMENT",
      "category": "A",
      "displayName": "Motivation",
      "description": "Comprehends the ability to energize people to achieve their goals",
      "milestones": [
          {
              "summary": "Fosters enthusiasm and common purpose among colleagues",
              "signals": [
                  "Contributes to generating commitment in individuals and the team",
                  "Speaks positively and enthusiastically about the organization's products\/services and future direction"
              ],
              "examples": []
          },
          {
              "summary": "Mobilizes individuals to develop goals, execute plans, and deliver client value        ",
              "signals": [
                  "Creates a fun and energetic environment that promotes creativity",
                  "Validates ongoing work and sustains motivation",
                  "Establishes challenging, yet realistic, performance goals that tap into people's interests"
              ],
              "examples": []
          },
          {
              "summary": "Inspires others to a greater effort by setting an example in his\/her\/their own behavior of dedication",
              "signals": [
                  "Recognizes individual and team performance, even when things go wrong",
                  "Empowers a team to drive forward amidst uncertainty",
                  "Models excellence and enthusiasm for the work"
              ],
              "examples": []
          },
          {
              "summary": "Conveys confidence in others' capabilities and appeals to others' unique needs, interests, and goals to motivate them to achieve",
              "signals": [
                  "Empowers the project team and individuals. Expresses positive expectations of others regarding their abilities or potentials, even in challenging cases. Believes others want to and can learn",
                  "Ensures that the self-realization and practical needs of the project team are met"
              ],
              "examples": []
          },
          {
              "summary": "Enables and directs generation of energy \u2014 motivation to act \u2014 among members of the organization and clients",
              "signals": [
                  "Demonstrates the ability to use others as a sounding board for generating ideas and plans; acknowledges their expertise or perspective when asking for their opinions",
                  "Ability to find and use successes to celebrate progress towards the vision",
                  "Sets clear goals and a desired future state that is compelling and realistic for stakeholders"
              ],
              "examples": []
          }
      ]
  }


  return trackList
}

export const engineeringTracks = (trackList: object[]): object[] => {
    trackList["HEADER_ONE"] = {
        "milestone": "HEADER_ONE",
        "cohort": "ENGINEERING",
        "category": "A",
        "displayName": "Engineering Foundations",
        "description": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas",
        "milestones": [
            {
                "summary": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas",
                "signals": [
                    "Is building proficiency with our tech stack and becoming comfortable with learning new technologies and skills",
                    "Has experience with development best practices, Palantir's chosen technology stack, web accessibility, and web development frameworks",
                    "Performs assigned tasks and tickets with occasional assistance",
                    "Helps estimate tickets while working on refining estimation skills"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas",
                "signals": [
                    "Focuses on expanding experience and proficiency in our code base, with solid understanding of relevant areas",
                    "Is well-versed with development best practices, Palantir's chosen technology stack, web accessibility, and core development tools",
                    "Performs assigned tasks and completes tickets close to estimated time with minimal assistance",
                    "Learns new areas of code base and new tech very quickly",
                    "Provides reliable estimates for tickets with context"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas",
                "signals": [
                    "Independently scopes and implements solutions for their project\/team",
                    "Is proficient in all relevant technical skills, and is able to move quickly",
                    "Maintains awareness of industry trends and tools",
                    "Contributes to open source work",
                    "Demonstrates the ability to come up with solid technical solutions to ambiguous or open-ended problems",
                    "Often gives support to others in their areas of strongest skill",
                    "Accurately estimates ticketed work"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas",
                "signals": [
                    "Has a deep understanding of our architecture and how their domain fits within it.",
                    "Systematically thinks through potential design impacts on other teams and the company",
                    "Is an expert in our processes, also helps to define them",
                    "Keeps tests up to date",
                    "Independently scopes, designs, and delivers solutions for large, complex challenges",
                    "Debugs expertly within their primary focus area",
                    "Provides oversight, coaching, and guidance through code and design reviews",
                    "Incredibly knowledgeable in their area of expertise, often to a degree that is recognized far beyond Palantir"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas",
                "signals": [
                    "Is a primary expert in multiple areas of our technology stack, incredibly knowledgeable in several domains",
                    "Designs and builds industry-leading techniques to solve complex problems",
                    "Anticipates technical challenges, thoroughly explores alternatives and trade-offs",
                    "Focuses on technical decision making, leading work that affects one or more complex systems and mission-critical areas",
                    "Explores technologies with sizable potential impact for Palantir"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_TWO"] = {
        "milestone": "HEADER_TWO",
        "cohort": "ENGINEERING",
        "category": "A",
        "displayName": "Back-End Coding",
        "description": "Demonstrates expertise and proficiency in developing and supporting our code base, with solid understanding of relevant areas",
        "milestones": [
            {
                "summary": "Demonstrates expertise and proficiency in developing and supporting our code base, with solid understanding of relevant areas",
                "signals": [
                    "Writes code that is sometimes production-ready, but usually requires iteration before shipping",
                    "Is becoming comfortable working with one or two specific disciplines",
                    "Receives and integrates feedback from code reviews to ship high-quality code",
                    "Participates in code reviews and technical design",
                    "Receives and incorporates feedback from PR reviews",
                    "Performs small PR reviews around functional behavior"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates expertise and proficiency in developing and supporting our code base, with solid understanding of relevant areas",
                "signals": [
                    "Writes code that usually ships promptly by receiving and successfully integrating critical input from code reviews. Work rarely needs to be rewritten before shipping",
                    "Follows style guides",
                    "Ships maintainable code that works and is understandable by teammates",
                    "Is becoming comfortable diving in and making changes to many areas of code, not just a single area of code",
                    "Provides helpful, timely code reviews",
                    "Performs code audits"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates expertise and proficiency in developing and supporting our code base, with solid understanding of relevant areas",
                "signals": [
                    "Consistently delivers code that sets the standard for quality, security, and maintainability",
                    "Understands large swaths of the code base with a deep knowledge and \"reaches in and touches the right levers.\" Able to move rapidly as a result",
                    "Writes consistently reliable code, so that input from code reviewers is high-level only",
                    "Provides code review feedback that is sought after, respected, and often instructional to others",
                    "Writes meaningful code reviews",
                    "Sets the standards for performing code audits"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates expertise and proficiency in developing and supporting our code base, with solid understanding of relevant areas",
                "signals": [
                    "Has all the skills necessary to ship quickly",
                    "Has built expertise in some relevant technical skills; good understanding of full stack",
                    "Provides mentorship and technical guidance to more junior teammates",
                    "Writes highly insightful, comprehensive code reviews"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates expertise and proficiency in developing and supporting our code base, with solid understanding of relevant areas",
                "signals": [
                    "Builds an entire complex product from scratch that requires significant R&D efforts",
                    "Is seen as a leader who advances the state of the art and a contributor to the broader technical community",
                    "Demonstrates the ability to resolve technical problems without little context",
                    "Constantly learning new technologies, can navigate and make legacy code maintainable"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_THREE"] = {
        "milestone": "HEADER_THREE",
        "cohort": "ENGINEERING",
        "category": "A",
        "displayName": "DevOps",
        "description": "Develops expertise and proficiency in DevOps",
        "milestones": [
            {
                "summary": "Develops expertise and proficiency in DevOps",
                "signals": [
                    "Is building proficiency in creating solutions using tools and automation to improve operations",
                    "Understands common software development tools and processes, including version control, issue tracking, and continuous build"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in DevOps",
                "signals": [
                    "Focuses on expanding experience and proficiency in DevOps practices, with solid understanding of operating systems",
                    "Understands web application development, server deployment and upkeep, and general networking practices",
                    "Modifies existing software to correct errors with guidance",
                    "Supports and improves our tools for continuous integration, automated testing, and release management with guidance"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in DevOps",
                "signals": [
                    "Enhances and streamlines operational processes through automation and integration without guidance",
                    "Deploys and administers server-hosted software solutions",
                    "Modifies existing software to correct errors, adapt to new hardware, or improve performance",
                    "Is able to debug problems throughout the stack"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in DevOps",
                "signals": [
                    "Analyzes user needs and software requirements to determine feasibility of design within time and cost constraints",
                    "Responds to the needs of project managers and engineers to customize hosted tools to improve team efficiency",
                    "Uses scientific analysis and mathematical models to predict and measure outcomes and consequences of design"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in DevOps",
                "signals": [
                    "Drives capacity for triaging and handling operational issues while advising the team on the process of writing code and engineering systems that will make their entire code base more reliable, testable, and scalable",
                    "Is seen as an expert who advances the state of the art",
                    "Is a consistent contributor to the broader technical community",
                    "Creates innovative and comprehensive tools and practices to improve deployment and testing"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_FOUR"] = {
        "milestone": "HEADER_FOUR",
        "cohort": "ENGINEERING",
        "category": "A",
        "displayName": "Engineering Craft",
        "description": "Embodies and promotes practices to ensure excellent quality products and services",
        "milestones": [
            {
                "summary": "Embodies and promotes practices to ensure excellent quality products and services",
                "signals": [
                    "Tests new code thoroughly, both locally and in production once shipped",
                    "Writes tests for every new feature and bug fix with guidance",
                    "Writes clear comments and documentation",
                    "Works effectively within established web client architectures such as HTML, PHP, and JavaScript, following current best practices"
                ],
                "examples": []
            },
            {
                "summary": "Embodies and promotes practices to ensure excellent quality products and services",
                "signals": [
                    "Refactors existing code to make it more testable",
                    "Adds tests for uncovered areas",
                    "Deletes unnecessary code and deprecates proactively when safe to do so",
                    "Assesses correctness and utility of existing code and avoids blind copy-pasting",
                    "Generalizes code when appropriate",
                    "Develops new instances of or minor improvements to existing architecture"
                ],
                "examples": []
            },
            {
                "summary": "Embodies and promotes practices to ensure excellent quality products and services",
                "signals": [
                    "Implements systems that enable better testing",
                    "Gives thoughtful code reviews as a domain expert",
                    "Adds tooling to improve code quality, security, and maintainability"
                ],
                "examples": []
            },
            {
                "summary": "Embodies and promotes practices to ensure excellent quality products and services",
                "signals": [
                    "Builds complex, reusable architectures that leads to best practices and enable engineers to work more effectively",
                    "Consistently keeps the team focused on quality",
                    "Coordinates priorities and projects",
                    "Iterates repeatedly to develop and refine Palantir's best practices",
                    "Acts as primary maintainer for existing critical systems"
                ],
                "examples": []
            },
            {
                "summary": "Embodies and promotes practices to ensure excellent quality products and services",
                "signals": [
                    "Defines policies for the engineering discipline that encourage quality work",
                    "Identifies and eliminates single points of failure throughout the discipline",
                    "Identifies and solves systemic problems with current architecture",
                    "Creates a compelling technical vision with company-level impact, anticipating future needs"
                ],
                "examples": []
            }
        ]
    }


  return trackList
}

export const frontendTracks = (trackList: object[]): object[] => {
    trackList["HEADER_ONE"] = {
        "milestone": "HEADER_ONE",
        "cohort": "FED",
        "category": "A",
        "displayName": "Front-End Foundations",
        "description": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas",
        "milestones": [
            {
                "summary": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas",
                "signals": [
                    "Is building proficiency with our web technologies and becoming comfortable with learning new technologies and skills",
                    "Has experience with web development frameworks, HTML, CSS, JavaScript, and website accessibility",
                    "Performs assigned tasks and tickets with occasional assistance",
                    "Helps estimate tickets while working on refining estimation skills",
                    "Has an understanding of wireframing, UX design, and UI patterns",
                    "Has experience developing and testing across multiple browsers"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas",
                "signals": [
                    "Focuses on expanding experience and proficiency in our web technology practices, with solid understanding of relevant areas",
                    "Is well versed with web development frameworks, HTML, CSS, JavaScript and website accessibility",
                    "Performs assigned tasks and tickets close to estimated time with minimal assistance",
                    "Provides reliable estimates for tickets given a complete context",
                    "Has a practical understanding of DevOps and how it is related to their work",
                    "Makes open source contributions and proactively does so"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas",
                "signals": [
                    "Independently scopes and implements solutions for their project\/team",
                    "Is proficient in all relevant technical skills and is able to move quickly.",
                    "Maintains awareness of industry trends and tools",
                    "Completes tickets reasonably close to estimated time without needing to be reminded",
                    "Demonstrates the ability to come up with solid technical solutions to ambiguous or open-ended problems",
                    "Often gives support to others in their areas of strongest skill",
                    "Accurately estimates ticketed work"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas",
                "signals": [
                    "Has a deep understanding of our architecture and how their domain fits within it.",
                    "Systematically thinks through potential design impacts on other teams and the company",
                    "Is an expert in our processes, also helping define them.",
                    "Keeps tests up to date",
                    "Independently scopes, designs, and delivers solutions for large, complex challenges",
                    "Debugs expertly within their primary focus area",
                    "Provides oversight, coaching, and guidance through code and design reviews",
                    "Incredibly knowledgeable in their area of expertise, often to a degree that is recognized far beyond Palantir"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our technical domain, with solid understanding of relevant areas",
                "signals": [
                    "Is viewed as a domain leader and contributor across the organization",
                    "Primary expert in multiple areas of our stack, incredibly knowledgeable in several domains",
                    "Designs and builds industry-leading techniques to solve complex problems",
                    "Anticipates technical challenges and thoroughly explores alternatives and trade-offs",
                    "Focuses on technical decision making, leading work that affects one or more complex systems and mission-critical areas",
                    "Explores technologies with sizable potential impact for Palantir"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_TWO"] = {
        "milestone": "HEADER_TWO",
        "cohort": "FED",
        "category": "A",
        "displayName": "Front-End Coding",
        "description": "Develops expertise and proficiency in our front-end code base, with solid understanding of relevant areas",
        "milestones": [
            {
                "summary": "Develops expertise and proficiency in our front-end code base, with solid understanding of relevant areas",
                "signals": [
                    "Writes front-end code that is sometimes production-ready, but usually requires iteration before shipping",
                    "Is becoming comfortable working with one or two areas of front-end code",
                    "Receives and integrates feedback from front-end code reviews to ship high-quality code",
                    "Participates in front-end code reviews and architecture design"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our front-end code base, with solid understanding of relevant areas",
                "signals": [
                    "Writes front-end code that usually ships promptly by receiving and successfully integrating critical input from code reviews. Work rarely needs to be rewritten before delivery",
                    "Follows style guides",
                    "Ships maintainable front-end code that works and is understandable by teammates",
                    "Is becoming comfortable diving in and making changes to many areas of code, not just a single area of code",
                    "Provides helpful, timely front-end code reviews"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our front-end code base, with solid understanding of relevant areas",
                "signals": [
                    "Consistently delivers front-end code that sets the standard for quality and maintainability",
                    "Understands large swaths of the code base with a deep knowledge and ability to \"reach in and touch the right levers.\" Able to move rapidly as a result",
                    "Writes consistently reliable code, so input from code reviewers is high-level only",
                    "Provides front-end code review feedback that is sought after, respected, and often instructional",
                    "Writes meaningful front-end code reviews",
                    "Translates design solutions into high-quality front-end code"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our front-end code base, with solid understanding of relevant areas",
                "signals": [
                    "Has all the skills necessary to ship quickly",
                    "Has built expertise in some relevant technical skills; good understanding of full stack",
                    "Provides mentorship and technical guidance to more junior teammates",
                    "Provides highly insightful code review feedback that addresses high-level thoughts",
                    "Writes highly insightful, comprehensive front-end code reviews"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our front-end code base, with solid understanding of relevant areas",
                "signals": [
                    "Builds cutting-edge web applications, with a focus on client side",
                    "Leads code testing integration and oversees quality system performance",
                    "Is seen as a leader who advances the state of the art, and is a contributor to the broader technical community",
                    "Constantly learning new web technologies, can navigate and make legacy front-end code maintainable",
                    "Leads code reviews and guides software architecture decisions"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_THREE"] = {
        "milestone": "HEADER_THREE",
        "cohort": "FED",
        "category": "A",
        "displayName": "Web Technologies",
        "description": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript. Contributes to relevant open source projects",
        "milestones": [
            {
                "summary": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript. Contributes to relevant open source projects",
                "signals": [
                    "Makes minor modifications to existing work",
                    "Fixes simple design quality issues",
                    "Uses CSS appropriately, following style guide"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript. Contributes to relevant open source projects",
                "signals": [
                    "Makes sensible abstractions based on template and code patterns",
                    "Specs and builds interactive components independently",
                    "Prototypes simple new features quickly",
                    "Builds modal systems"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript. Contributes to relevant open source projects",
                "signals": [
                    "Provides useful design feedback and suggests feasible alternatives",
                    "Performs systemic tasks to significantly minimize bundle size",
                    "Acts a caretaker for all of web client code",
                    "Prototypes with code using modern front-end frameworks and digital pattern library"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript. Contributes to relevant open source projects",
                "signals": [
                    "Initiates and leads architecture migrations that reduce programmer burden",
                    "Implements complex UI transitions that bring delight",
                    "Makes architectural decisions that eliminate entire classes of bugs"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript. Contributes to relevant open source projects",
                "signals": [
                    "Invents new techniques to mitigate browser constraints when feasible",
                    "Identifies and solves systemic problems with current architecture",
                    "Defines a long-term vision for web client and ensures projects are in service of it",
                    "Implements omni directional data flow to completion"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_FOUR"] = {
        "milestone": "HEADER_FOUR",
        "cohort": "FED",
        "category": "A",
        "displayName": "Front-End Craft",
        "description": "Embodies and promotes practices to ensure excellent quality products and services",
        "milestones": [
            {
                "summary": "Embodies and promotes practices to ensure excellent quality products and services",
                "signals": [
                    "Understands the entire web development process, including design, development, and deployment and has some back-end knowledge as well",
                    "Builds responsive and adaptive websites with guidance of a more experienced FED"
                ],
                "examples": []
            },
            {
                "summary": "Embodies and promotes practices to ensure excellent quality products and services",
                "signals": [
                    "Understands and demonstrates knowledge of accessibility needs, concerns, design, and best practices",
                    "Builds semantic, accessible, and maintainable front-end interfaces",
                    "Accurately translates prototypes and design into working interfaces"
                ],
                "examples": []
            },
            {
                "summary": "Embodies and promotes practices to ensure excellent quality products and services",
                "signals": [
                    "Supports complex and secure components for modern browsers written in the latest web standards",
                    "Works with UX to develop and maintain processes that ensure our tools and practices are up to date",
                    "Gives thoughtful front-end code reviews as a domain expert",
                    "Implements systems that enable better testing",
                    "Adds tooling to improve front-end code base quality",
                    "Maintains high coding standards and practices to exercise quality control on all aspects of web development"
                ],
                "examples": []
            },
            {
                "summary": "Embodies and promotes practices to ensure excellent quality products and services",
                "signals": [
                    "Takes the lead on browser\/device acceptance testing and bug fixing",
                    "Collaborates with UX designers to promote and achieve optimal solutions for clients",
                    "Leads client demos",
                    "Maintains and improves front-end code bases across a wide variety of projects",
                    "Improves quality of work to meet the level of Palantir's best solutions through repeated iteration"
                ],
                "examples": []
            },
            {
                "summary": "Embodies and promotes practices to ensure excellent quality products and services",
                "signals": [
                    "Defines policies for the team that encourage quality work",
                    "Identifies and eliminates single points of failure throughout the chapter",
                    "Secures time and resources from executive leadership to support great quality",
                    "Creates a compelling technical vision with company-level impact, anticipating future needs"
                ],
                "examples": []
            }
        ]
    }

  return trackList
}

export const designTracks = (trackList: object[]): object[] => {
    trackList["HEADER_ONE"] = {
        "milestone": "HEADER_ONE",
        "cohort": "DESIGN",
        "category": "A",
        "displayName": "Design Foundations",
        "description": "Demonstrates proficiency in Palantir\u2019s UX Design practice",
        "milestones": [
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Design practice",
                "signals": [
                    "Demonstrates proficiency in the tools, techniques, processes, and technologies adopted by the team",
                    "Is becoming familiar with the technical strengths and constraints within our preferred technology solutions",
                    "Is learning to present work to clients with the guidance of a more experienced team member",
                    "Understands the founding principles of UX design and usability"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Design practice",
                "signals": [
                    "Is strengthening proficiency in Palantir\u2019s UX Design practice",
                    "Is deepening understanding and efficiency in team tools, techniques, processes and technologies",
                    "Applies current best practices in the areas of usability, accessibility, information architecture, and UX design",
                    "Understands the strengths and constraints of our preferred technology solutions",
                    "Advocates for solutions easily supported by the selected technology while supporting the project goals",
                    "Explores new methodologies when the project need arises",
                    "Works well in their area of expertise with little to no daily guidance",
                    "Collaborates effectively with team members, proactively reaching out when needs arise",
                    "Proactively seeks out industry trends",
                    "Is capable of defining design work for themselves and other team members",
                    "Is proficient with UI\/UX tools (e.g., Sketch, Figma, Adobe Creative Cloud, Invision, etc.)",
                    "Problem solves within the framework of project goals, user needs, timeline and budget",
                    "Designs and performs competitive analysis, proactively researches relevant examples and seeks out industry trends"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Design practice",
                "signals": [
                    "Explores new tools, techniques, processes and technologies that may increase efficiency and effectiveness on projects",
                    "Can guide a client towards solutions easily supported by our recommended technology solutions",
                    "Confidently communicates UX findings and recommendations, connecting UX rationale of project goals",
                    "Collaborates with the development and engineering team to learn technical requirements and constraints of a project",
                    "Develops new plays in their area of expertise",
                    "Determines solid, well-researched solutions to ambiguous or open-ended problems",
                    "Adapts process and contributes value within client-approved budget, scope and timeline",
                    "Creates documentation and training materials for projects"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Design practice",
                "signals": [
                    "Explores ways to leverage technology to solve a unique problem for a client or project",
                    "Has multiple strategies for managing and responding to challenging feedback",
                    "Has an expert understanding of design systems, component based design, web accessibility and UX best practices",
                    "Helps sales team accurately represent and sell design, creating estimates, communicating processes and providing examples",
                    "Is a sought after partner to co-create new initiatives",
                    "Explores and experiments within projects contributing to sizable client value",
                    "Strategically analyzes the risks, benefits, and opportunities of various solutions",
                    "Seeks out discipline-wide opportunities for improvement",
                    "Is incredibly knowledgeable in their area of expertise, recognized by industry experts\/leaders outside of Palantir"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Design practice",
                "signals": [
                    "Is always evolving the UX practice, with a focus on how to add the highest value for the client within any time or budget",
                    "Designs and implements industry-leading techniques to solve complex problems",
                    "Leads projects that are complex and mission critical",
                    "Sees patterns across Palantir design and UX work and makes connections between them to move projects and experiments forward",
                    "Is capable of high-level, consultative, predictive thinking"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_TWO"] = {
        "milestone": "HEADER_TWO",
        "cohort": "DESIGN",
        "category": "A",
        "displayName": "UX Design",
        "description": "Understands and applies UX principles to projects",
        "milestones": [
            {
                "summary": "Understands and applies UX principles to projects",
                "signals": [
                    "Understands UI\/UX design fundamentals",
                    "Is learning about accessibility and how it applies to UX design",
                    "Has a basic level of understanding of usability principles",
                    "Is learning about content modeling with the guidance of a more experienced team member",
                    "Is learning about how content models, site structure and page layouts support the project goals and user needs",
                    "Creates wireframes with the guidance of a more experienced team member"
                ],
                "examples": []
            },
            {
                "summary": "Understands and applies UX principles to projects",
                "signals": [
                    "Continuously learns and stays current on UX design trends",
                    "Can design effective UX solutions for desktop and mobile devices",
                    "Continues to learn about usability and how it applies to common project challenges",
                    "Provides effective UX designs within the framework of the project goals and user needs",
                    "Leads wireframing workshops with the client with the support of a UX strategist",
                    "Creates UX design layouts with sample content that supports site goals and user needs"
                ],
                "examples": []
            },
            {
                "summary": "Understands and applies UX principles to projects",
                "signals": [
                    "Looks for ways to incorporate new UX design solutions into projects",
                    "Understands when and how to take a mobile first approach to UX design",
                    "Can talk to, educate, and inform clients about web accessibility, explaining design rationale in relation to this topic",
                    "Communicate UX design choices to the client within the framework of the project goals and user needs",
                    "Coaches client on how to use web components to achieve site goals and user needs (content strategy)"
                ],
                "examples": []
            },
            {
                "summary": "Understands and applies UX principles to projects",
                "signals": [
                    "Invents new UX design solutions to a problem when a previous solution may not exist",
                    "Can easily navigate conversations around mobile UX design with clients, sharing the pros and cons of various approaches",
                    "Can discuss, inform and educate clients about why certain approaches may be more user friendly than others",
                    "Advocates for the best user experience throughout a project",
                    "Creates training materials to help the client add and configure their content in a way that supports the strategy and goals of the project"
                ],
                "examples": []
            },
            {
                "summary": "Understands and applies UX principles to projects",
                "signals": [
                    "Leads team to explore new UX design solution for mobile devices",
                    "Shares ideas with the team about usability insights. Looks for ways to incorporate these ideas into future projects",
                    "Creates new ways to deliver continued value to client with the UX design practice"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_THREE"] = {
        "milestone": "HEADER_THREE",
        "cohort": "DESIGN",
        "category": "A",
        "displayName": "Visual Design",
        "description": "Creates visually compelling and effective designs for client work and internal projects",
        "milestones": [
            {
                "summary": "Creates visually compelling and effective designs for client work and internal projects",
                "signals": [
                    "Understands design fundamentals such as the principles and elements of design",
                    "Creates compelling and effective design within the constraints of a project with the guidance of a more experienced designer",
                    "Is aware of current design trends in web design, print, web applications, software, and mobile applications"
                ],
                "examples": []
            },
            {
                "summary": "Creates visually compelling and effective designs for client work and internal projects",
                "signals": [
                    "Stays current on new visual design trends in our areas of expertise (i.e. healthcare, higher education, government)",
                    "Provides feedback to team members during design critiques",
                    "Understands and can effectively extend a visual design system for the web",
                    "Explores ways to modernize and evolve a design system with each project, without compromising the client\u2019s brand integrity"
                ],
                "examples": []
            },
            {
                "summary": "Creates visually compelling and effective designs for client work and internal projects",
                "signals": [
                    "Pushes themselves to try new visual solutions on every project",
                    "Effectively presents work to client, clearly articulating design and art direction rationale",
                    "Can navigate vague or challenging client feedback, translating feedback into the language of design",
                    "Has a deep understanding of design systems as they relate to the web",
                    "Can design within any predefined brand framework, regardless of style",
                    "Creates and documents  guidelines for how to follow a visual design system"
                ],
                "examples": []
            },
            {
                "summary": "Creates visually compelling and effective designs for client work and internal projects",
                "signals": [
                    "Creates design and web brand systems from scratch",
                    "Strengthens their skill set by creating visual assets, iconography, illustration, photography direction and conceptual design",
                    "Acts as art director with colleagues",
                    "Initiates and implements production methodologies that increase efficiency for repeatable tasks"
                ],
                "examples": []
            },
            {
                "summary": "Creates visually compelling and effective designs for client work and internal projects",
                "signals": [
                    "Coaches and mentors less experienced team members to strengthen their visual design",
                    "Shares design insights within the team and publicly via blogs or talks",
                    "Works with management to suggest new design offerings Palantir could offer that fill a client need and fall within the expertise of the team"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_FOUR"] = {
        "milestone": "HEADER_FOUR",
        "cohort": "DESIGN",
        "category": "A",
        "displayName": "Prototyping",
        "description": "Translates visual designs into HTML and CSS, extending the visual style guide and components in code",
        "milestones": [
            {
                "summary": "Translates visual designs into HTML and CSS, extending the visual style guide and components in code",
                "signals": [
                    "Converts visual designs into a functional prototype using HTML,CSS and JS with the guidance of a more experienced team member",
                    "Creates prototypes within existing frameworks supported by the team",
                    "Understands the visual building blocks of a design system and how they can be extended"
                ],
                "examples": []
            },
            {
                "summary": "Translates visual designs into HTML and CSS, extending the visual style guide and components in code",
                "signals": [
                    "Creates HTML\/CSS prototypes with increasing efficiency and proficiency",
                    "Implement sand modifes JS code to help create interactions and functionality",
                    "Extends component libraries in code without visual mockups",
                    "Presents and solicits client feedback on prototypes"
                ],
                "examples": []
            },
            {
                "summary": "Translates visual designs into HTML and CSS, extending the visual style guide and components in code",
                "signals": [
                    "Creates code that follows accessibility standards",
                    "Creates full library of components in code, including list views, interaction elements and high level page layouts",
                    "Creates micro animation interactions when it improves the user experience",
                    "Works to standardize prototyping approaches across the team",
                    "Creates and documents guidelines for how to leverage the style guide (component library)"
                ],
                "examples": []
            },
            {
                "summary": "Translates visual designs into HTML and CSS, extending the visual style guide and components in code",
                "signals": [
                    "Realizes efficiencies within repeatable patterns from project to project",
                    "Helps sales and management scope and estimate time for this work on projects",
                    "Coaches clients on how to use components to build pages for their site",
                    "Creates example of important pages in style guide, including sample content and guidelines for usage"
                ],
                "examples": []
            },
            {
                "summary": "Translates visual designs into HTML and CSS, extending the visual style guide and components in code",
                "signals": [
                    "Designs complex, multi-faceted prototypes",
                    "Implements design on the front-end, filling in for a FED as needed",
                    "Applies a design thinking approach to prototype development and teaches others how to do the same",
                    "Leads the team to keep coding standards up to date and modernized"
                ],
                "examples": []
            }
        ]
    }


  return trackList
}

export const strategyTracks = (trackList: object[]): object[] => {
    trackList["HEADER_ONE"] = {
        "milestone": "HEADER_ONE",
        "cohort": "STRATEGY",
        "category": "A",
        "displayName": "Strategy Foundations",
        "description": "Demonstrates proficiency in Palantir\u2019s UX Strategy practice",
        "milestones": [
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Strategy practice",
                "signals": [
                    "Is building proficiency in Palantir\u2019s UX Strategy practice",
                    "Is developing an understanding of the connections between business goals, user interactions, content strategy, and information architecture",
                    "Understands the founding principles of UX design and usability",
                    "Is becoming familiar with the technical strengths and constraints within our preferred technology solutions",
                    "Has working knowledge of UX tools (e.g., Sketch, Invision, Google Analytics, etc.)"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Strategy practice",
                "signals": [
                    "Is strengthening proficiency in Palantir\u2019s UX Strategy practice",
                    "Applies current best practices in the areas of usability, content strategy, accessibility, information architecture, SEO, and UX design",
                    "Understands the strengths and constraints of our preferred technology solutions",
                    "Advocates for solutions easily supported by the selected technology while supporting the project goals",
                    "Explores new methodologies when the project need arises",
                    "Works well in their area of expertise with little to no daily guidance",
                    "Designs and performs competitive analysis, proactively researches relevant examples and seeks out industry trends",
                    "Defines strategy work for themselves and other team members",
                    "Is proficient with UX tools (e.g., Sketch, Invision, Google Analytics, etc.)",
                    "Problem solves within the framework of project goals, user needs, timeline and budget"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Strategy practice",
                "signals": [
                    "Understands writing for the web and guides clients to develop web content",
                    "Creates documentation and training materials for projects",
                    "Confidently communicates UX findings and recommendations, connecting UX reasoning to project goals",
                    "Collaborates with engineering team to learn technical requirements and constraints of a project",
                    "Develops new plays in their area of expertise",
                    "Determines solid, well-researched solutions to ambiguous or open-ended problems",
                    "Adapts process and contributes value within client-approved budget, scope and timeline"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Strategy practice",
                "signals": [
                    "Has an expert understanding of web components, design systems, and UX best practices",
                    "Has a expert understanding of content modeling, content strategy, and information architecture",
                    "Helps the sales team accurately convey the value of UX Strategy",
                    "Is a sought after partner to co-create new initiatives",
                    "Explores and experiments within projects contributing to sizable client value",
                    "Strategically analyzes the risks, benefits, and opportunities of various solutions",
                    "Seeks out discipline-wide opportunities for improvement",
                    "Is incredibly knowledgeable in their area of expertise recognized by industry experts\/leaders outside of Palantir",
                    "Supports the sales team regarding strategy\/UX proposal and estimate work"
                ],
                "examples": []
            },
            {
                "summary": "Demonstrates proficiency in Palantir\u2019s UX Strategy practice",
                "signals": [
                    "Is always evolving UX practice, with a focus on how to add the highest value for the client within any time or budget",
                    "Designs and implements industry-leading techniques to solve complex problems",
                    "Leads projects that are complex and mission critical",
                    "Sees patterns across Palantir strategy work and makes connections between them to move projects and experiments forward",
                    "Is capable of high-level, consultative, predictive thinking"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_TWO"] = {
        "milestone": "HEADER_TWO",
        "cohort": "STRATEGY",
        "category": "A",
        "displayName": "Discovery and Planning",
        "description": "Explores goals, business models, users, user experience, information architecture, content structures, taxonomies, technology ecospheres, pain points, and aspirations",
        "milestones": [
            {
                "summary": "Explores goals, business models, users, user experience, information architecture, content structures, taxonomies, technology ecospheres, pain points, and aspirations",
                "signals": [
                    "Conducts content inventories to understand current site map and content models on a site",
                    "Working knowledge of inventory tools such as Screaming Frog",
                    "Conducts discovery workshops with the guidance of a more experienced team member",
                    "Conducts stakeholder interviews with the guidance of a more experienced team member",
                    "Learns about client\u2019s domain, competitors, and business model",
                    "Learns about client\u2019s primary users"
                ],
                "examples": []
            },
            {
                "summary": "Explores goals, business models, users, user experience, information architecture, content structures, taxonomies, technology ecospheres, pain points, and aspirations",
                "signals": [
                    "Observes patterns in content inventories, learning what works and where opportunities lie",
                    "Is gaining confidence in leading discovery workshops on their own",
                    "Confidently conducts stakeholder interviews",
                    "Learns about existing pain points",
                    "Understands project goals and aspirations and can discuss them with the client",
                    "Audits site content and content models for quality and effectiveness",
                    "Learns about primary audiences and their top tasks",
                    "Guides less experienced team members in discovery and research tasks"
                ],
                "examples": []
            },
            {
                "summary": "Explores goals, business models, users, user experience, information architecture, content structures, taxonomies, technology ecospheres, pain points, and aspirations",
                "signals": [
                    "Has developed a library of UX Discovery workshop formats to pull from as needed",
                    "Documents and understands existing taxonomies",
                    "Confidently leads discovery workshops and pivots as needed to refocus efforts in a specific area based on project needs",
                    "Adapts discovery process to match budget, scope, and project goals",
                    "Experiments with new discovery methodologies when the project need arises",
                    "Learns about how content is created, who writes it, etc. (content governance)",
                    "Learns about and documents all technologies being used on a given project",
                    "Conducts competitive analysis",
                    "Works with the client to define KPIs"
                ],
                "examples": []
            },
            {
                "summary": "Explores goals, business models, users, user experience, information architecture, content structures, taxonomies, technology ecospheres, pain points, and aspirations",
                "signals": [
                    "Expertly decides which research and strategy activities to conduct based on budget, time, and goals",
                    "Is deeply knowledgeable of trends in our primary client industries (i.e. healthcare, higher education, government)",
                    "Is accountable for project planning and UX strategy resource adjustments based on information gathered during discovery",
                    "Develops Project Charter summary of findings from Discovery work for presentation to the client"
                ],
                "examples": []
            },
            {
                "summary": "Explores goals, business models, users, user experience, information architecture, content structures, taxonomies, technology ecospheres, pain points, and aspirations",
                "signals": [
                    "Sets the vision for Palantir\u2019s Discovery approach and works with the team to identify needed pivots",
                    "Validates and adapts project shape for Palantir Strategy work as it evolves"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_THREE"] = {
        "milestone": "HEADER_THREE",
        "cohort": "STRATEGY",
        "category": "A",
        "displayName": "Research and Analysis",
        "description": "Conducts user research and analyzes data and inputs gathered during discovery in order to inform recommendations",
        "milestones": [
            {
                "summary": "Conducts user research and analyzes data and inputs gathered during discovery in order to inform recommendations",
                "signals": [
                    "With the help of a more experienced team member, creates user testing plans for project",
                    "With the help of a more experienced team member, writes user testing scripts",
                    "Evaluates existing site content and opportunity areas, with the guidance of a more experienced team member",
                    "Evaluates how users currently use a site with various technologies (ie: Hotjar)",
                    "Participates in user research activities as a note-taker or observer"
                ],
                "examples": []
            },
            {
                "summary": "Conducts user research and analyzes data and inputs gathered during discovery in order to inform recommendations",
                "signals": [
                    "Creates user testing plans and writes user testing scripts",
                    "Conducts user research activities such as interviews, surveys, tree tests and usability tests with the guidance of a more experienced team member",
                    "Analyzes results learned from user testing",
                    "Identifies for ways content to improve, either in structure or format, to better meet project goals",
                    "Analyzes user flows captured by various technologies"
                ],
                "examples": []
            },
            {
                "summary": "Conducts user research and analyzes data and inputs gathered during discovery in order to inform recommendations",
                "signals": [
                    "Conducts user testing with a growing number of methodologies",
                    "Sets up online systems to learn how visitors are using the site",
                    "Gathers and analyzes data on current and potential information architecture structures",
                    "Identifies gaps and opportunities within existing content governance",
                    "Identifies patterns in site usage such as entrances, exits, high traffic areas",
                    "Chooses the highest value attribute to test in a given project"
                ],
                "examples": []
            },
            {
                "summary": "Conducts user research and analyzes data and inputs gathered during discovery in order to inform recommendations",
                "signals": [
                    "Based on research, advises the client on KPIs for the project",
                    "Is experienced in a number of user testing methodologies, including in person, remote and automated testing",
                    "Adapts and evolves processes to any size budget and scope",
                    "Helps guide less experienced team members with testing and analysis",
                    "Independently conducts all aspects of complex user-research programs\u2014 from early-stage requirements to summative usability testing",
                    "Adapts user-research techniques to inform both new and ongoing, complex project initiatives"
                ],
                "examples": []
            },
            {
                "summary": "Conducts user research and analyzes data and inputs gathered during discovery in order to inform recommendations",
                "signals": [
                    "Has expert knowledge of user experience practices, testing methodologies, site analytics",
                    "Can identify exact friction points in a project, whether it\u2019s in UX design, content quality, content governance, information architecture or technical implementation",
                    "Designs complex, multi-faceted testing programs",
                    "Expertly conducts all stages of user research\u2014 including market analysis, requirements definition, early-to-mid-stage design validations, and summative usability--testing activities",
                    "Simultaneously plans and drives multiple user-research activities across widely divergent product domains",
                    "Develops and shares cross-industry research outside of Palantir via writings, presentations or panels"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_FOUR"] = {
        "milestone": "HEADER_FOUR",
        "cohort": "STRATEGY",
        "category": "A",
        "displayName": "Recommendations",
        "description": "Recommends improvements for project strategies, user experience, and information architecture within the framework of the project goals and informed by user research",
        "milestones": [
            {
                "summary": "Recommends improvements for project strategies, user experience, and information architecture within the framework of the project goals and informed by user research",
                "signals": [
                    "Provides a new sitemap, with the help of a more experienced team member",
                    "Recommends site changes to consider based on user testing",
                    "Creates support documents outlining recommendations for client"
                ],
                "examples": []
            },
            {
                "summary": "Recommends improvements for project strategies, user experience, and information architecture within the framework of the project goals and informed by user research",
                "signals": [
                    "Creates, presents and gets feedback on new sitemap and information architecture",
                    "Creates, presents and gets feedback on new taxonomies",
                    "Works with UX Designers to brainstorm and sketch key user flows",
                    "Identifies and communicates ways to change content strategy approach",
                    "Generates recommendations that match budget, scope, and project goals",
                    "Shares research findings both internally and with the client"
                ],
                "examples": []
            },
            {
                "summary": "Recommends improvements for project strategies, user experience, and information architecture within the framework of the project goals and informed by user research",
                "signals": [
                    "Helps client clarify site business goals",
                    "Helps client define site users\u2019 needs and goals",
                    "Leads internal and client UX working sessions to explore new flows and page structure",
                    "Works with UX Designers to recommend improvements to highest value site experiences",
                    "Proficient in presentation tools used to clearly communicate recommendations and results",
                    "Effectively makes recommendations to client, through thoughtful explanation and education",
                    "Educates a client on a recommended strategy that supports the project goals, business model, and user needs",
                    "Contributes to functionality reviews and testing of design and development work",
                    "Confidently engages with the client, quickly cultivating trust and faith in expertise"
                ],
                "examples": []
            },
            {
                "summary": "Recommends improvements for project strategies, user experience, and information architecture within the framework of the project goals and informed by user research",
                "signals": [
                    "Helps client define project goals and offers suggestions for revisions based on domain insights",
                    "Provides ongoing feedback during design phase to ensure site supports overall strategy",
                    "Helps train client to build pages in a way that supports site strategy",
                    "Helps client define most meaningful KPIs and measurement plans based on site strategy",
                    "Works with UX Designers, FEDs and Engineers to define technical execution of the strategy",
                    "Develops content strategy, management, and governance plans",
                    "Raises concerns if strategy is getting off-track during execution",
                    "Mentors less experienced team members on how to guide and recommend solutions to a client"
                ],
                "examples": []
            },
            {
                "summary": "Recommends improvements for project strategies, user experience, and information architecture within the framework of the project goals and informed by user research",
                "signals": [
                    "Talks with client about content governance, sharing guidance for how to fill gaps or create better support for content teams",
                    "Thinks about project success beyond the life of the current client engagement and works with customer success teams to foster future opportunities",
                    "Persuades clients by advocating for the user which may lead to outcomes not originally conceived of by the client",
                    "Evaluates the quality of the execution of original strategy in design and development work",
                    "Expertly navigates stakeholder feedback (and\/or pushback) on recommendations and works toward productive next steps"
                ],
                "examples": []
            }
        ]
    }

  return trackList
}

export const pmTracks = (trackList: object[]): object[] => {
    trackList["HEADER_ONE"] = {
        "milestone": "HEADER_ONE",
        "cohort": "PM",
        "category": "A",
        "displayName": "Project Management Foundations",
        "description": "Develops expertise and proficiency in our project management practice, with solid understanding of relevant areas",
        "milestones": [
            {
                "summary": "Develops expertise and proficiency in our project management practice, with solid understanding of relevant areas",
                "signals": [
                    "Is building proficiency in our project management practice",
                    "Has working knowledge of our project management tool set",
                    "Measures project performance using appropriate tools and techniques",
                    "Responds promptly to client inquiries and requests, and proactively communicates to both clients and team members about project scheduling",
                    "Organizes agreements, budgets, scope of work, and timelines for the project teams to easily and efficiently reference",
                    "Creates timelines to manage the project as outlined in the scope of work (SOW)",
                    "Manages to the budget outlined in the scope of work (SOW)",
                    "Works within the given parameters outlined in the project\u2019s scope of work (SOW)",
                    "Facilitates team through Agile practices, including daily scrums, backlog planning, sprint planning, and retrospectives"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our project management practice, with solid understanding of relevant areas",
                "signals": [
                    "Is strengthening proficiency in our project management practice",
                    "Defines project management work for themselves (self-directed)",
                    "Is able to develop comprehensive project plans with assistance of more experienced project managers",
                    "Closely monitors projects to ensure that they maintain the timeline and are within scope and budget constraints",
                    "Develops a detailed project plan to monitor and track progress",
                    "Monitors client satisfaction",
                    "Presents budgets, scope of work, and timelines to the appropriate stakeholders",
                    "Monitors and communicates gaps in achieving the agreements, budgets, scope of work, and timelines",
                    "Monitors the project workstream and checks in with team members if their tickets aren\u2019t being tracked or completed in a timely fashion.",
                    "Provides leadership by customizing project status reports to meet stakeholder needs\/preferences",
                    "Creates and maintains comprehensive project documentation and presents it to the appropriate stakeholders",
                    "Knows the differences between UX, UI and Engineering work, understanding their cadences and deliverables",
                    "Supports team members in ticketed work when budget and opportunity allow (e.g., QA, participating in UX sessions, etc.)"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our project management practice, with solid understanding of relevant areas",
                "signals": [
                    "Establishes and promote best practices and standards in our project management practice",
                    "Partners with the PO to translate project goals into a project plan that maximizes Palantir's expertise and resourcing to deliver value to the client",
                    "Accommodates project constraints in regards to resources, budget, time, and scope in order to meet desired outcomes",
                    "Actively manages changes to the project scope, budget, and timeline using appropriate verification techniques",
                    "Partners with the PO to delegate project tasks to teammates considering their individual strengths, skill sets, and experience levels",
                    "Is well-versed with project management methodologies and tools",
                    "Provides necessary context for the team so that team members can understand their roles on the project and tackle their tasks efficiently",
                    "Sets and continually manages project expectations while delegating and managing deliverables with team members and stakeholders",
                    "Develops new plays in their area of expertise",
                    "Tracks project benefits realization and lessons learned to feed into ongoing improvements"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our project management practice, with solid understanding of relevant areas",
                "signals": [
                    "As a project team lead, shares management of the difficult client relationship conversations with the other members of the client success team (having difficult conversations)",
                    "Helps the client and team define success criteria and disseminates these to involved parties throughout the project and program life cycle",
                    "Elevates the project management discipline by establishing practices, templates, policies, tools, and partnerships Streamlines and level-sets project management practices across the different service lines",
                    "Keeps an eye on latest strategies, tools, and terminologies used in project management worldwide",
                    "Mentors and coaches project management cohort",
                    "Is incredibly knowledgeable in their area of expertise recognized by industry experts\/leaders outside of Palantir",
                    "Facilitates the creation and internal drafts of SOWs \/ Contracts"
                ],
                "examples": []
            },
            {
                "summary": "Develops expertise and proficiency in our project management practice, with solid understanding of relevant areas",
                "signals": [
                    "Manages dilemmas and paradoxes as they occur throughout the project life cycle by identifying and communicating trade-offs to key stakeholders",
                    "Approves SOWs\/Contracts",
                    "Is a leader and contributor in the broader organization",
                    "Designs industry-leading techniques to solve complex problems"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_TWO"] = {
        "milestone": "HEADER_TWO",
        "cohort": "PM",
        "category": "A",
        "displayName": "Plan",
        "description": "Comprehends the processes and activities to identify, define, combine, unify, and coordinate the various elements within project management such as scope, budget, timelines, and resources",
        "milestones": [
            {
                "summary": "Comprehends the processes and activities to identify, define, combine, unify, and coordinate the various elements within project management such as scope, budget, timelines, and resources",
                "signals": [
                    "Understands all project agreements, budgets, scopes of work, and timelines",
                    "With guidance, creates and maintains comprehensive project documentation",
                    "With guidance, creates and maintains a high-level project schedule with major milestones, and makes sure that the schedule is visible and accessible to the project team and client",
                    "With guidance, monitors and communicates project progress against scope, quality, time, and cost baselines, including approved changes",
                    "With guidance, creates and monitors project progress with the team and plans for how much work will be completed in each sprint using point budgets",
                    "Updates the resource forecasting tool for all members of the team, based on project needs and budget limits, on a consistent and timely basis",
                    "Ensures resource availability and allocation",
                    "Ensures that team members have awareness of and visibility into the amount of time they are resourced to the project each week",
                    "Monitors the billing schedule, and makes that schedule visible and accessible to the financial team and client"
                ],
                "examples": []
            },
            {
                "summary": "Comprehends the processes and activities to identify, define, combine, unify, and coordinate the various elements within project management such as scope, budget, timelines, and resources",
                "signals": [
                    "Without guidance, creates and maintains a high-level project schedule with major milestones, and makes sure that the schedule is visible and accessible to the project team and client",
                    "Without guidance, monitors and communicates project progress against scope, quality, time, and cost baselines, including approved changes",
                    "Without guidance, creates and monitors project progress with the team and plans for how much work will be completed in each sprint using point budgets",
                    "Ensures that the project has a defined, documented and estimated scope of work that fits within the budget",
                    "Ensures any scope changes remain within the budget or ensures a change order is pursued",
                    "Monitors and communicates project progress against scope, quality, time, and cost baselines, including approved changes",
                    "Creates and maintains a high-level project schedule with major milestones, and makes that schedule visible and accessible to the project team and client",
                    "Assess and communicates project impacts (e.g., adjusted schedule, budget, scope) when a team member or client identifies an issue or constraint (e.g., team velocity drops\/rises, client misses deadlines, etc.)"
                ],
                "examples": []
            },
            {
                "summary": "Comprehends the processes and activities to identify, define, combine, unify, and coordinate the various elements within project management such as scope, budget, timelines, and resources",
                "signals": [
                    "Develops a detailed project plan, based on delivering value to the client, to monitor and track progress against",
                    "Identifies when project constraints shift, and adjusts the project plan based on new information (ex: team velocity drops\/rises, client misses deadlines)",
                    "Assists in the definition of project scope and objectives, involving all relevant stakeholders and ensuring technical feasibility",
                    "Manages project progress against scope, quality, time, and cost baselines, including approved changes",
                    "Facilitates client conversations to categorize features in priority order",
                    "Partners with the appropriate team members to ensure that changes to the project are tangible, strategic, and achievable",
                    "Documents project needs in a consumable and effective way (e.g., spreadsheets, diagrams, process maps)",
                    "Partners with the appropriate team members to ensure that changes fit within the project strategy and desired outcomes",
                    "Establishes a completion plan that includes all aspects of delivery of project outcomes across the entire project life cycle",
                    "Discusses the standard project process with the team and client, in order to ensure that timelines, schedules, and milestones reflect the appropriate path for the project to follow"
                ],
                "examples": []
            },
            {
                "summary": "Comprehends the processes and activities to identify, define, combine, unify, and coordinate the various elements within project management such as scope, budget, timelines, and resources",
                "signals": [
                    "Establishes best practices on how to create and maintain a high-level project schedule with major milestones, and makes sure that the schedule is visible and accessible to the project team and client",
                    "Establishes best practices on how to monitor and communicate project progress against scope, quality, time, and cost baselines, including approved changes",
                    "Leads discussions to review and finalize scope change requests",
                    "Coaches others on effective project planning",
                    "Partners with the appropriate team members to ensure that the finished project is strategically beneficial to the client",
                    "Defends product integrity from misinformed decision-making both internally and externally"
                ],
                "examples": []
            },
            {
                "summary": "Comprehends the processes and activities to identify, define, combine, unify, and coordinate the various elements within project management such as scope, budget, timelines, and resources",
                "signals": [
                    "Understands what it means to run a business-driven project management plan\u2014from strategy through execution to the realization of business benefits\u2014centered on the client",
                    "Plans and monitors company-level projects.",
                    "Assists in dispute negotiation, arbitration, or litigation, as needed"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_THREE"] = {
        "milestone": "HEADER_THREE",
        "cohort": "PM",
        "category": "A",
        "displayName": "Risk Mitigation",
        "description": "Comprehends the ability to conduct risk planning, identification, analysis, and response planning and controlling risk on a project",
        "milestones": [
            {
                "summary": "Comprehends the ability to conduct risk planning, identification, analysis, and response planning and controlling risk on a project",
                "signals": [
                    "Participates in ongoing risk assessments with guidance",
                    "Determines which risks may affect the project and documents the specifics with assistance of a senior team member",
                    "Actively seeks to understand and document potential consequences of risks as they occur",
                    "Ensures that mitigation plans are put in place for prioritized project risks",
                    "Maintains awareness and visibility of the risks to the client and team throughout the course of the project"
                ],
                "examples": []
            },
            {
                "summary": "Comprehends the ability to conduct risk planning, identification, analysis, and response planning and controlling risk on a project",
                "signals": [
                    "Conducts ongoing risk assessments with guidance",
                    "Understands and documents potential consequences of risks as they occur",
                    "Monitors and communicates status of project risks with guidance",
                    "Prioritizes risks for further analysis or action by assessing their probabilities of occurrence and impact",
                    "Ensures that the client is aware of the risks and understands their consequences, along with the mitigation plans for each of the risks",
                    "Oversees and guides the risk analysis process and the development of risk responses"
                ],
                "examples": []
            },
            {
                "summary": "Comprehends the ability to conduct risk planning, identification, analysis, and response planning and controlling risk on a project",
                "signals": [
                    "Prioritizes risks for further analysis or action by assessing their probabilities of occurrence and impact",
                    "Develops options and actions to enhance opportunities and reduce threats to project objectives",
                    "Initiates risk response plans when necessary",
                    "Drives and leads creative actions to enhance opportunities and reduce threats to project objectives",
                    "Proactively handles project risks by identifying potential complications and conflicts and creating\/implementing timely mitigation strategies"
                ],
                "examples": []
            },
            {
                "summary": "Comprehends the ability to conduct risk planning, identification, analysis, and response planning and controlling risk on a project",
                "signals": [
                    "Develops best practices for guidance and direction on how risks will be managed across the discipline",
                    "Coaches teammates and project teams on effective risk mitigation practices",
                    "Clearly articulates project risks to the client, including their negative impact on the company\u2019s overall business"
                ],
                "examples": []
            },
            {
                "summary": "Comprehends the ability to conduct risk planning, identification, analysis, and response planning and controlling risk on a project",
                "signals": [
                    "Expertly conducts all stages of risk mitigation\u2014including planning, identification, analysis, and response",
                    "Applies risk mitigation strategies to company-level processes\/practices"
                ],
                "examples": []
            }
        ]
    }
    trackList["HEADER_FOUR"] = {
        "milestone": "HEADER_FOUR",
        "cohort": "PM",
        "category": "A",
        "displayName": "Information",
        "description": "Comprehends the effective exchanges of accurate, appropriate, and relevant information with stakeholders",
        "milestones": [
            {
                "summary": "Comprehends the effective exchanges of accurate, appropriate, and relevant information with stakeholders",
                "signals": [
                    "Actively listens to and understands stakeholders' needs, interests, and influences in order to achieve project success",
                    "Develops and adapts communication strategies with guidance",
                    "Provides accurate and factual information in a concise manner",
                    "Participates in responses to issues and concerns"
                ],
                "examples": []
            },
            {
                "summary": "Comprehends the effective exchanges of accurate, appropriate, and relevant information with stakeholders",
                "signals": [
                    "Effectively summarizes key points and issues in a clear and concise manner",
                    "Adapts communication style, messages, and tools to meet the needs of stakeholders",
                    "Develops and maintains project tracking, dashboards, and information systems",
                    "Proactively responds to issues and concerns",
                    "Engages with team members when developing project progress reports, analyzing issues and potential paths forward, and removing blockers to work"
                ],
                "examples": []
            },
            {
                "summary": "Comprehends the effective exchanges of accurate, appropriate, and relevant information with stakeholders",
                "signals": [
                    "Engages with stakeholders proactively",
                    "Establishes regular, meaningful interactions with stakeholder",
                    "Appropriately matches level of formality to meetings and audience",
                    "Regularly conducts follow-up with stakeholders",
                    "Seeks validation of information",
                    "Balances speed of provision of information against reliability of information",
                    "Provides feedback on templates and guidelines, including examples and methods based on experiences and lessons learned",
                    "Evaluates, develops, and executes responses to provide an appropriate level of information to stakeholders and maintain their engagement throughout project life cycle"
                ],
                "examples": []
            },
            {
                "summary": "Comprehends the effective exchanges of accurate, appropriate, and relevant information with stakeholders",
                "signals": [
                    "Establishes best practices in effectively communicating key information about project plan status, budget and timeline.",
                    "Has difficult conversations with the client around schedule, budget, and risk and is able to resolve the issue amicably",
                    "Builds processes and structures to ensure the transfer of information that influences strategic decisions and produces foundations for new project management capabilities",
                    "Continually seeks new information to assess the effectiveness of our project management practice",
                    "Uses appropriate channels internally to disseminate company\/practice information"
                ],
                "examples": []
            },
            {
                "summary": "Comprehends the effective exchanges of accurate, appropriate, and relevant information with stakeholders",
                "signals": [
                    "Presents complex company information in digestible ways",
                    "Improves company-wide information communication channels"
                ],
                "examples": []
            }
        ]
    }


  return trackList
}
