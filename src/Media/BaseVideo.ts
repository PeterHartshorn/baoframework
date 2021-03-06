import View from "../View";

class BaseVideo extends View
{
	currentTime: number;
	duration: number;
	url: string;
	type: string;
	isPaused: boolean;
	obtype = "video";

	constructor()
	{
		super();
		this.currentTime = 0;
		this.duration = 0;
		this.isPaused = false;
	}

	$setData(data)
	{
		if (data["url"]) this.$setVideo(data["url"], data["type"]);
	}

	$setVideo(url, type)
	{
		this.url = url;
		this.type = type;
		this.currentTime = 0;
		this.duration = 0;
	}

	$getPosition()
	{
		return this.currentTime;
	}

	$getDuration()
	{
		return this.duration;
	}

	$getPositionAsTime()
	{
		return this._secondsToTime(this.$getPosition());
	}

	$getDurationAsTime()
	{
		return this._secondsToTime(this.$getDuration());
	}

	$isPaused()
	{
		return this.isPaused;
	}

	_secondsToTime(totalSeconds)
	{
		const hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = Math.floor(totalSeconds % 60);

		return (hours ? hours + ":" : "") +
			(hours && minutes < 10 ? "0" : "") + minutes + ":" +
			(seconds < 10 ? "0" : "") + seconds;
	}

	$play()
	{
	}

	$pause()
	{
	}

	$seek(offset)
	{
	}

	$stop()
	{
	}

}

export default BaseVideo;
