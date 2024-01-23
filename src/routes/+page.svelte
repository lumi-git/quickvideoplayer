<script>
    import { videoData  } from '../lib/index.js';
    videoData.fetchData();
</script>


<div class="block mt-10">

    <div class = "flex mb-10">
        <p class = "metadataItems">Title : {videoData.title}</p>
        <p class = "metadataItems">Quality : {videoData.quality}</p> 
        <p class = "metadataItems">Langage : {videoData.langage}</p>
        <p class = "metadataItems">Subtitles : {videoData.subtitles}</p>
        <p class = "metadataItems">Animal : {videoData.animal}</p>
    </div>

    <div class = "flex">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video src="fox.mp4" controls class = "m-auto rounded-2xl shadow-2xl border-gray-600 border-2">
    </div>

</div>
