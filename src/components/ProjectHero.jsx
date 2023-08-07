export const ProjectHeader = (props) => {
    const { title, date, location, course, role, description } = props;
  
    return (
        <>
        <div className="text-left mb-8 top-0 left-0 ">
            <div className="text-7xl SF-Compact-Bold mb-8">
                {title}
            </div>
            <div className="text-sm SF-Compact-Thin my-px mb-8">
                <div>
                    {date}
                </div>
                <div>
                    {location}
                </div>
                <div>
                    {course}
                </div>
                <div>
                    {role}
                </div>
            </div>
            <div className="text-base SF-Compact-Light max-w-2xl">
                {description}
            </div>
        </div>
        </>
    );
  };