

const templateArray = [
    {
        // This is the template for a handle type that does not have any "modifiers"
        "Name": "Task Name",
        "Handle Type": "Key ? Door Knob ? Ridged Knob ? Tap ? Wing Nut",
        "Modifiers": [],
        "Force Count": 1,
        "Force Magnitude": 1,
        "Force Duration": 1,
        "Hand": "Right ? Left"
    },
    {
        // This is the template for the L-Shaped handle type
        "Name": "Task Name",
        "Handle Type": "L-Shaped",
        "Modifiers": ["Counter-clockwise ? Clockwise"],
        "Force Count": 1,
        "Force Magnitude": 1,
        "Force Duration": 1,
        "Hand": "Right ? Left"
    },{
        // This is the template for the Jar Lid handle type
        "Name": "Task Name",
        "Handle Type": "Jar Lid",
        "Modifiers": ["Knurled ? Smooth", "1.8 inch diameter ? 2.6 inch diameter ? 3.3 inch diameter"],
        "Force Count": 1,
        "Force Magnitude": 1,
        "Force Duration": 1,
        "Hand": "Right ? Left"
    },{
        // This is the template for the Round Knob handle type
        "Name": "Task Name",
        "Handle Type": "Round Knob",
        "Modifiers": ["Knurled ? Smooth", "0.125 inch diameter ? 0.25 inch diameter ? 0.5 inch diameter ? 0.75 inch diameter ? 1.0 inch diameter ? 2.0 inch diameter ? 3.0 inch diameter ? 4.0 inch diameter ? 5.0 inch diameter"],
        "Force Count": 1,
        "Force Magnitude": 1,
        "Force Duration": 1,
        "Hand": "Right ? Left"
    },{
        // This is the template for either of the two screwdriver handle types (regular / pistol grip)
        "Name": "Task Name",
        "Handle Type": "Regular Screwdriver ? Pistol Grip Screwdriver",
        "Modifiers": ["Counter-clockwise ? Clockwise", "Palm-down (60 degrees Pronated) ? Hand-shake (Neutral) ? Palm-up (60 degrees Supinated)"],
        "Force Count": 1,
        "Force Magnitude": 1,
        "Force Duration": 1,
        "Hand": "Right ? Left"
    },{
        // This is the template for the T-Handle handle type
        "Name": "Task Name",
        "Handle Type": "T-Handle",
        "Modifiers": ["Elbow Angle 180 degrees ? Elbow Angle 135 degrees ? Elbow Angle 90 degrees ? Elbow Angle 45 degrees", "Counter-clockwise ? Clockwise", "Palm-down (75% Range of Motion) ? Hand-shake (Neutral) ? Palm-up (75% Range of Motion)"],
        "Force Count": 1,
        "Force Magnitude": 1,
        "Force Duration": 1,
        "Hand": "Right ? Left"
    },{
        // This is the template for the Cylindrical Handle handle type
        "Name": "Task Name",
        "Handle Type": "Cylindrical Handle",
        "Modifiers": ["Smooth ? Knurled", "Outward ? Inward", "1.8 inch diameter ? 2.3 inch diameter ? 3.3 inch diameter"],
        "Force Count": 1,
        "Force Magnitude": 1,
        "Force Duration": 1,
        "Hand": "Right ? Left"
    }
    
]