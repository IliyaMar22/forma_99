import Copy from "@/components/Copy";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <>
      <ReactLenis root />

      <nav>
        <p>FORMA S</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#production">Production</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="section-bg">
          <div style={{ 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(135deg, var(--tone-200) 0%, var(--tone-300) 100%)' 
          }}></div>
        </div>
        <Copy blockColor="#fe0100">
          <h1>
            FORMA S
          </h1>
        </Copy>
      </section>

      <section id="about" className="about">
        <Copy>
          <h2>
            FORMA S Ltd. is a company with an established presence 
            in interior design and furniture manufacturing for over 30 years.
          </h2>
        </Copy>
      </section>

      <section className="banner-img">
        <div className="section-bg">
          <div style={{ 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(135deg, var(--tone-300) 0%, var(--tone-200) 100%)' 
          }}></div>
        </div>
      </section>

      <section className="services">
        <Copy blockColor="#fe0100">
          <h1>
            Founded in 1996, the company has grown dynamically, 
            building early on a team of highly qualified designers 
            and specialists with extensive experience.
          </h1>
        </Copy>
      </section>

      <section className="banner-img">
        <div className="section-bg">
          <div style={{ 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(135deg, var(--tone-200) 0%, var(--tone-100) 100%)' 
          }}></div>
        </div>
      </section>

      <section className="cta">
        <Copy>
          <p>
            Alongside our team of experts, the company has invested 
            in a modern production facility and equipment, ensuring 
            full control over the entire process - from concept to 
            finished product. Our strengths cover all types of 
            interiors, both public and private.
          </p>
        </Copy>
      </section>

      <section className="outro">
        <div className="section-bg">
          <div style={{ 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(135deg, var(--tone-100) 0%, var(--tone-200) 100%)' 
          }}></div>
        </div>
        <Copy blockColor="#fe0100">
          <h1>
            Today, FORMA S Ltd. successfully combines the knowledge 
            and experience of its team with the capabilities of its 
            in-house production. This ensures high quality, efficient 
            organization, and consistency in every undertaking, 
            establishing the company as a reliable and preferred partner.
          </h1>
        </Copy>
      </section>

      <section id="production" className="production">
        <Copy>
          <h2>
            PRODUCTION
          </h2>
        </Copy>
        <Copy>
          <p>
            Our modern production facility represents the cornerstone 
            of FORMA S Ltd. Equipped with state-of-the-art machinery 
            and operated by skilled specialists, we maintain complete 
            control over every stage of the manufacturing process.
          </p>
        </Copy>

        <section className="banner-img">
          <div className="section-bg">
            <div style={{ 
              width: '100%', 
              height: '100%', 
              background: 'linear-gradient(135deg, var(--tone-200) 0%, var(--tone-300) 100%)' 
            }}></div>
          </div>
        </section>

        <Copy blockColor="#fe0100">
          <h1>
            From concept to finished product, we oversee every detail 
            ensuring quality, precision, and timely delivery.
          </h1>
        </Copy>

        <div className="production-grid">
          <div className="production-item">
            <Copy>
              <h3>Material Selection</h3>
            </Copy>
            <p>
              We carefully source and prepare the finest materials, 
              ensuring each component meets our rigorous quality standards.
            </p>
          </div>

          <div className="production-item">
            <Copy>
              <h3>Precision Manufacturing</h3>
            </Copy>
            <p>
              Our advanced equipment and skilled craftsmen transform 
              raw materials into precisely crafted furniture pieces.
            </p>
          </div>

          <div className="production-item">
            <Copy>
              <h3>Quality Control</h3>
            </Copy>
            <p>
              Every product undergoes thorough inspection at multiple 
              stages to guarantee excellence before leaving our facility.
            </p>
          </div>

          <div className="production-item">
            <Copy>
              <h3>Assembly & Finishing</h3>
            </Copy>
            <p>
              Expert technicians assemble components and apply premium 
              finishes, bringing each piece to its final form.
            </p>
          </div>

          <div className="production-item">
            <Copy>
              <h3>Installation</h3>
            </Copy>
            <p>
              Our professional installation team ensures seamless 
              integration of furniture into your space with precision 
              and care.
            </p>
          </div>

          <div className="production-item">
            <Copy>
              <h3>After-Sales Support</h3>
            </Copy>
            <p>
              We provide ongoing maintenance and support services to 
              ensure your investment continues to serve you well.
            </p>
          </div>
        </div>

        <Copy>
          <p style={{ marginTop: '4rem' }}>
            Our in-house production capabilities allow us to maintain 
            strict quality control while offering flexibility in design 
            and customization. This integrated approach enables us to 
            deliver projects that perfectly match our clients' vision 
            and requirements.
          </p>
        </Copy>

        <Copy blockColor="#fe0100">
          <h1 style={{ marginTop: '4rem' }}>
            The combination of experienced designers, skilled craftsmen, 
            and modern technology creates furniture that stands the test 
            of time.
          </h1>
        </Copy>
      </section>

      <section id="team" className="team">
        <Copy>
          <h2>
            OUR TEAM
          </h2>
        </Copy>
        <Copy>
          <p>
            The team of FORMA S Ltd. consists of talented and 
            experienced professionals—designers, project planners, 
            and specialists in furniture manufacturing. Each of them 
            contributes with their expertise, creativity, and attention 
            to detail, ensuring the excellent execution of every project.
          </p>
        </Copy>
        
        <div className="team-grid">
          <div className="team-member">
            <div className="team-member-image"></div>
            <h3>Stilian Dichev</h3>
            <p>Executive Director</p>
          </div>
          
          <div className="team-member">
            <div className="team-member-image"></div>
            <h3>Nina Dicheva</h3>
            <p>Administrative Director</p>
          </div>
          
          <div className="team-member">
            <div className="team-member-image"></div>
            <h3>Boyko Atanasov</h3>
            <p>Operations Director</p>
          </div>
          
          <div className="team-member">
            <div className="team-member-image"></div>
            <h3>Teodor Ivanov</h3>
            <p>Production Manager</p>
          </div>
          
          <div className="team-member">
            <div className="team-member-image"></div>
            <h3>Any Aleksieva</h3>
            <p>Furniture Engineer</p>
          </div>
          
          <div className="team-member">
            <div className="team-member-image"></div>
            <h3>Atanas Georgiev</h3>
            <p>Interior Designer</p>
          </div>
          
          <div className="team-member">
            <div className="team-member-image"></div>
            <h3>Sevdalina Bojinova</h3>
            <p>Interior Designer</p>
          </div>
        </div>

        <Copy>
          <p style={{ marginTop: '4rem' }}>
            In our office, our experts dedicate the necessary time to 
            fully understand your requirements. After a thorough 
            discussion, they develop the project, prepare sketches 
            and technical drawings, and then submit it to our 
            production facility for execution.
          </p>
        </Copy>

        <Copy>
          <p style={{ marginTop: '2rem' }}>
            Once the project enters our production facility, a series 
            of specialists—each an expert in their field—take part 
            in its realization. They manage every stage of the process: 
            from receiving and preparing the necessary materials, 
            through their processing, to the assembly and final 
            installation of the finished elements.
          </p>
        </Copy>
      </section>

      <section id="projects" className="projects">
        <Copy>
          <h2>
            PROJECTS
          </h2>
        </Copy>
        <Copy>
          <p>
            Our portfolio showcases a diverse range of interior design 
            and furniture manufacturing projects, spanning both public 
            and private spaces. Each project reflects our commitment to 
            quality, innovation, and attention to detail.
          </p>
        </Copy>

        <div className="projects-grid">
          <div className="project-item">
            <div className="project-image">
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(135deg, var(--tone-300) 0%, var(--tone-200) 100%)' 
              }}></div>
            </div>
            <h3>Residential Interiors</h3>
            <p>Custom-designed living spaces that combine functionality with aesthetic excellence</p>
          </div>

          <div className="project-item">
            <div className="project-image">
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(135deg, var(--tone-200) 0%, var(--tone-100) 100%)' 
              }}></div>
            </div>
            <h3>Commercial Spaces</h3>
            <p>Professional environments designed to enhance productivity and brand identity</p>
          </div>

          <div className="project-item">
            <div className="project-image">
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(135deg, var(--tone-100) 0%, var(--tone-300) 100%)' 
              }}></div>
            </div>
            <h3>Custom Furniture</h3>
            <p>Handcrafted pieces manufactured in our state-of-the-art production facility</p>
          </div>

          <div className="project-item">
            <div className="project-image">
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(135deg, var(--tone-300) 0%, var(--tone-100) 100%)' 
              }}></div>
            </div>
            <h3>Hospitality Design</h3>
            <p>Hotels and restaurants designed to create memorable guest experiences</p>
          </div>

          <div className="project-item">
            <div className="project-image">
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(135deg, var(--tone-200) 0%, var(--tone-300) 100%)' 
              }}></div>
            </div>
            <h3>Office Solutions</h3>
            <p>Modern workspaces that balance comfort, efficiency, and corporate culture</p>
          </div>

          <div className="project-item">
            <div className="project-image">
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(135deg, var(--tone-100) 0%, var(--tone-200) 100%)' 
              }}></div>
            </div>
            <h3>Luxury Interiors</h3>
            <p>High-end residential and commercial spaces with premium finishes</p>
          </div>
        </div>

        <Copy>
          <p style={{ marginTop: '4rem' }}>
            From initial concept development through technical drawings 
            and final installation, we manage every aspect of the design 
            and manufacturing process. Our in-house production capabilities 
            ensure complete control over quality and timelines.
          </p>
        </Copy>
      </section>

      <footer id="contact">
        <Copy>
          <h2>CONTACT</h2>
        </Copy>
        <Copy>
          <p>Bulgaria, 35. Srebarna Str., Sofia 1407</p>
          <p>Telephone: +359 883 0 883 00</p>
        </Copy>
        <Copy>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', textTransform: 'none' }}>
            © 2026 Forma S Ltd.
          </p>
        </Copy>
      </footer>
    </>
  );
}
