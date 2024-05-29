---
parent: Tools
---

# Web Conferencing (Zoom)

* TOC
{:toc}

These guidelines are meant to help {{ site.foundation_name }} community members manage their meetings using web conferencing tools provided by the {{ site.foundation_name }}.

## Setting up your meeting

Meetings are provisioned using [LFX Project Control Center][]. This service uses [Zoom][] on the backend and integrates with a user's LF ID accounts, providing a secure and reliable virtual meeting experience. This does require the user to have an LF ID, which can be easily created and maintained in the [LFX Individual Dashboard][]. Documentation on provisioning new meetings and sharing with participants is documented in the [LFX Meeting Management documentation][].

## Running a meeting using LFX Meeting Management

Generally, meetings provisioned using LFX Meeting Management are relatively straightforward to run. Here are a few tips that might be helpful.

### Screen sharing guidelines and recommendations

Zoom has [documentation on how to use thier screen sharing feature][]:

Recommendations:

- Turn off notifications to prevent any interference.
- Close all sensitive documents and unrelated programs before sharing the screen
  e.g., Emails.
- Test your presentation beforehand to make sure everything goes smoothly.
- Keep your desktop clean. Make sure there are no offensive or/and distracting
  background.

### Audio/Video quality recommendations

While video conferencing has been a real boon to productivity, [many things can go wrong][] during a conference video call.

Some things are just plain out of your control, but there are some things that you can control. Here are some tips if you're getting into remote meetings. Keep in mind that sometimes things break. These are not hard rules, more of a set of loose guidelines on how to tip the odds in your favor.

#### Recommended hardware to have

- **A dedicated microphone** - This is the number one upgrade you can do. Sound is one of those things that can immediately change the quality of your call. If you plan on being here for the long haul, something like a [Blue Yeti][] will work great due to the simplicity of using USB audio and having a hardware mute button. Consider a [pop filter][] as well, if necessary.
- **A Video Camera** - A bad image can be worked around if the audio is good. Specific models have noise-canceling dual microphones, which are an excellent backup for a dedicated microphone or if you are traveling.
- **A decent set of headphones** - Personal preference; these reduce audio feedback in larger meetings.

What about an integrated headset and microphone? This depends on the type. We recommend testing it with a friend or asking for recommendations for which models work best.

#### Hardware we don't recommend

- **Earbuds**. Generally speaking, they are not ideal, and while they sound acceptable to you when 50 people are on a call, the ambient noise adds up. Some people join with earbuds, which sounds excellent; others join, and it sounds terrible. Practicing with someone ahead of time can help you determine how well your earbuds work.

### Conduct and Moderation

Since the Zoom meetings are open to the general public, a Zoom host or co-host has to moderate a meeting in all senses, from starting and stopping the meeting to acting on [Code of Conduct][] issues. {{ site.foundation_name }} adheres to its [Code of Conduct][] or the relevant project code of conduct throughout all platforms and includes all communication mediums.

If you're dealing with a troll or bad actor:

- Put the troll or bad actor on **hold**. The participant will be put into a "waiting room" and unable to participate in the call until the host removes the hold.
- Remove the participant. Please be cautious when testing or using this feature, as it is **permanent**. They will never be able to come back into that meeting ID on that particular device. Do **not** joke around with this feature; putting the attendee on "hold" and removing it is better.
- After an action has been taken, use the **lock meeting** feature so that no one else can come into the meeting. If that fails, end the call immediately, and [submit a support request][Support Request] to report the issue.

**NOTE:** You can find these actions when clicking on the **more** or **"..."** options after scrolling over the participant's name/information.

Make sure whoever is running your meeting is equipped with the proper knowledge and skills. Hosts must be comfortable using these moderation tools and the Zoom settings. If you have any questions or concerns, reach out to the [LF Staff][Support Request], and they can provide further guidance and training.

#### Related moderation documentation

- Zoom has [documentation on how to use thier moderation tools][].

#### Escalating and/Reporting a Problem

Please submit a [support request][Support Request] for issues that cannot be handled via normal moderation.

## Meeting recordings

Meetings using the LFX Meeting Management service can generally be set to automatically record the meeting and make a transcript, which users can retrieve in their [LFX Individual Dashboard][] or from the [{{ site.foundation_name }} Public Calendar]({{ site.calendar_url }}). Project leads can also get recordings from past meetings in [LFX Project Control Center][] in the meeting management section; feel free to share those links and access keys in the notes from the meeting. 

If any conduct or other violation has been addressed by a host and recorded, the video should be edited before posting. [Submit a support request][Support Request] if you need help editing a video before posting it to the public.

## Pro-tips

- If you join the meeting via the desktop or web client, [ensure your name is set correctly][], so other attendees know who you are ( especially the person taking meeting notes! ).
- [Join on muted audio and video][] to prevent noise to those already on a call.
- If you don't have anything to say at that moment, **MUTE**. This is a common problem. The meeting co-host can help with muting noisy attendees before it becomes too disruptive. You can help a teammate by mentioning it on Zoom chat or asking them to mute the call. Don't feel bad if this happens to you; it's common.
- Try to find a quiet meeting place to join from; some coworking spaces and coffee shops have a ton of ambient noise that won't be obvious to you but will be to other people in the meeting. Consider delegating to another person in a quieter environment when presenting to large groups.
- Using your computer's built-in microphone and speakers might work in a pinch, but generally will perform better than a dedicated headset/microphone.
- A simple thumbs-up can go a long way! Consider using visual signals to agree to points, so you don't have to mute/unmute often during a call. This can be especially useful when people ask for lazy consensus.
- It is common for people to step on each other when there's an audio delay and both parties are trying to communicate something. Don't worry; remember to try and pause before speaking, or consider raising your hand (if your video is on) to help the host determine who should speak first.

Thanks for making ASWF meetings work great!

[Zoom]: https://zoom.us
[Code of Conduct]: ../code_of_conduct
[Support Request]: {{ site.helpdesk_url }}
[host key]: https://support.zoom.us/hc/en-us/articles/205172555-Host-Key
[latest version]: https://zoom.us/download
[documentation on how to use thier moderation tools]: https://support.zoom.us/hc/en-us/articles/201362603-Host-Controls-in-a-Meeting
[documentation on how to use thier screen sharing feature]: https://support.zoom.us/hc/en-us/articles/201362153-How-Do-I-Share-My-Screen
[many things can go wrong]: https://www.youtube.com/watch?v=JMOOG7rWTPg
[Blue Yeti]: https://www.bluedesigns.com/products/yeti/
[pop filter]: https://en.wikipedia.org/wiki/Pop_filter
[Join on muted audio and video]: https://support.zoom.us/hc/en-us/articles/203024649-Video-Or-Microphone-Off-By-Attendee
[LFX Project Control Center]: https://projectadmin.lfx.linuxfoundation.org
[LFX Individual Dashboard]: https://openprofile.dev
[LFX Meeting Management documentation]: https://docs.linuxfoundation.org/lfx/project-control-center-pre-release/it-services-for-a-project/meetings
[ensure your name is set correctly]: https://support.zoom.us/hc/en-us/articles/200941109-Attendee-Controls-in-a-Meeting
