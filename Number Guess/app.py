import requests

def convert_markdown_to_pdf(markdown_content, Resume_file="Resume.pdf", engine="weasyprint"):
    # Define CSS styles for the PDF
    cssfile = """
    body {
        font-family: Arial, sans-serif;
        margin: 20px;
        padding: 0;
    }
    h1 {
        color: MidnightBlue;
        text-align: center;
    }
    h3 {
        color: MidnightBlue;
        margin-bottom: 5px;
    }
    li {
        margin-top: 5px;
    }
    """

    # API endpoint for converting Markdown to PDF
    url = "https://md-to-pdf.fly.dev/pdf"

    # Data to be sent in the POST request
    data = {
        'markdown': markdown_content,
        'css': cssfile,
        'engine': engine
    }

    try:
        response = requests.post(url, json=data)

        if response.status_code == 200:
            with open(Resume_file, 'wb') as f:
                f.write(response.content)
            print(f"PDF successfully saved as {Resume_file}")
        else:
            print(f"Error {response.status_code}: {response.text}")
    except requests.RequestException as e:
        print(f"Request failed: {e}")

class Resume:
    def __init__(self, name, email, mobile, education, skills, experience, projects, 
                 achievements, activities):
        self.name = name
        self.email = email
        self.mobile = mobile
        self.education = education
        self.skills = skills
        self.experience = experience
        self.projects = projects
        self.achievements = achievements
        self.activities = activities

    def generate_markdown(self):
        markdown_text = f"# {self.name}\n"
        markdown_text += f"**Email:** {self.email} | **Mobile:** {self.mobile}\n\n"

        markdown_text += "## Education\n"
        for edu in self.education:
            markdown_text += f"- **{edu['level']}**: {edu['institution']} | {edu['field']} | Score: {edu['score']} | {edu['duration']}\n"

        markdown_text += "\n## Skills\n"
        markdown_text += f"{', '.join(self.skills)}\n"

        markdown_text += "\n## Experience\n"
        for exp in self.experience:
            markdown_text += f"- **{exp['job_role']} ({exp['company_name']})**: {exp['description']}\n"

        markdown_text += "\n## Projects\n"
        for proj in self.projects:
            markdown_text += f"- **{proj['name']}**: {proj['description']}\n"

        markdown_text += "\n## Achievements\n"
        for ach in self.achievements:
            markdown_text += f"- {ach}\n"

        markdown_text += "\n## Other Activities\n"
        markdown_text += f"{self.activities}\n"

        return markdown_text
 
def get_user_input():
    name = input("Enter your name: ")
    email = input("Enter your email: ")
    mobile = input("Enter your mobile number: ")

    print("\nEducation:")
    education = []
    while True:
        edu_input = input("Do you want to add education details? (yes/no): ").strip().lower()
        if edu_input != 'yes':
            break
        level = input("Enter education level (e.g., Graduation, High School): ")
        institution = input("Enter the institution name: ")
        field = input("Enter the field of study: ")
        duration = input("Enter passing year: ")
        score = input("Enter your score (GPA/Percentage): ")
        education.append({"level": level, "institution": institution, "field": field, "duration": duration, "score": score})

    skills = input("\nEnter your skills (comma-separated): ").split(',')

    print("\nExperience:")
    experience = []
    while True:
        job_role = input("Enter your job role (or type 'done' to finish): ").strip()
        if job_role.lower() == 'done':
            break
        company_name = input("Enter the company name: ")
        description = input(f"Enter the description for '{job_role}': ")
        experience.append({"job_role": job_role, "company_name": company_name, "description": description})

    print("\nProjects:")
    projects = []
    while True:
        project_name = input("Enter the project title (or type 'done' to finish): ").strip()
        if project_name.lower() == 'done':
            break
        project_description = input(f"Enter the description for '{project_name}': ")
        projects.append({"name": project_name, "description": project_description})

    print("\nAchievements:")
    achievements = []
    while True:
        achievement = input("Enter an achievement (or type 'done' to finish): ").strip()
        if achievement.lower() == 'done':
            break
        achievements.append(achievement)

    print("\nOther Activities (e.g., hobbies, clubs):")
    activities = input("Enter your activities: ").strip()

    return Resume(name, email, mobile, education, skills, experience, projects, achievements, activities)

if __name__ == "__main__":
    user_resume = get_user_input()
    markdown_text = user_resume.generate_markdown()
    convert_markdown_to_pdf(markdown_text)
